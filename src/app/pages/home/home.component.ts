import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as lottieWeb from 'lottie-web';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

let lottie = lottieWeb.default;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('container') container!: ElementRef;
  @ViewChild('hat') hat!: ElementRef;
  @ViewChild('smoke') smoke!: ElementRef;
  @ViewChild('brain') brain!: ElementRef;
  @ViewChild('smokeFull') smokeFull!: ElementRef;
  @ViewChild('video') video!: ElementRef;

  scrolled: boolean = false;
  isMobile: boolean = false;
  sliderItems: any;
  projects: Array<any> = [
    {
      name: 'Old Oaks',
      tag: 'Brand Identity/Packaging',
      imageLink: 'assets/images/01.jpg'
    },
    {
      name: 'Mr. Dragon - Energy Drink',
      tag: 'Brand Identity/Packaging',
      imageLink: 'assets/images/02.jpg'
    },
    {
      name: '¡Oh my Cat!',
      tag: 'Brand Identity/Packaging',
      imageLink: 'assets/images/03.jpg'
    },
    {
      name: 'Quilla',
      tag: 'Brand Identity/Packaging',
      imageLink: 'assets/images/04.jpg'
    },
    {
      name: 'Dashper',
      tag: 'App Development/Branding',
      imageLink: 'assets/images/05.jpg'
    },
    {
      name: 'Tradespot',
      tag: 'App Development/Branding',
      imageLink: 'assets/images/06.jpg'
    },
    {
      name: 'Ecowise',
      tag: 'Landing Page',
      imageLink: 'assets/images/07.jpg'
    },
  ]
  constructor(){
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
      this.isMobile = true;
    }
  }

  ngAfterViewInit(): void {
    this.loadTitleAnimation();
    this.loadSVGAnimation();
    this.loadVideoAnimation();
    this.loadProjectsAnimation();
  }

  loadTitleAnimation(): void {
    let sections = gsap.utils.toArray('.panel');
    
    gsap.to(sections, {
      xPercent: 0,
      ease: "power3",
      yoyo: false,
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        markers: false,
        end: () => "+=" + this.container.nativeElement.offsetWidth,
      }
    })
  }

  loadSVGAnimation(): void {
    let hat = lottie.loadAnimation({
      container: this.hat.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
      path: './assets/svg/animations/hat/data.json'
    })

    let smoke = lottie.loadAnimation({
      container: this.smoke.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
      path: './assets/svg/animations/smoke/data.json'
    })

    let brain = lottie.loadAnimation({
      container: this.brain.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
      path: './assets/svg/animations/brain/data.json'
    })

    let framesHat = { frame: 0 };
    let framesSmoke = { frame: 0 };
    let framesBrain = { frame: 0 };

    let tl = gsap.timeline({
      id: 'timeline1',
      ease: 'none',
      scrollTrigger: {
        trigger: "#hat",
        scrub: 0,
        pin: false, 
        start: "center center",
        markers: false,
        end: () => "+=" + this.container.nativeElement.offsetWidth,
      },
      yoyo: false,
      onUpdate: () => hat.goToAndStop(framesHat.frame, true),
      onComplete: ()=>{
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
        this.video.nativeElement.muted = true;
      }
    });

    tl
    .set('#animation', {
      translateX: "0px",
      translateY: this.isMobile? "-39%": "-23%",
    },0)
    .set('#smoke', {
      opacity: 0,
    },0)
    .set('#brain', {
      opacity: 0,
    },0)
    .to('#animation',{
      delay: 0,
      translateX: "7%",
      translateY: this.isMobile? "-39%": "-23%",
      duration: 60
    },0)
    .to('#title',{
      delay: 0,
      translateX: "-80%",
      duration: 60
    },0)
    .to(framesHat, {
      frame: 31,
      delay: 0,
      duration: 20,
    },0)
    .to('#smoke', {
      opacity: 1,
      delay: 12,
      duration: 1,
    },0)
    .to('#hat', {
      opacity: 0,
      scale: 0.1,
      delay: 15,
      duration: 1,
    },0)
    .to(framesSmoke, {
      delay: 15,
      duration: 10,
      frame: 31,
      onUpdate: () => smoke.goToAndStop(framesSmoke.frame, true),
    },0)
    .to('#brain', {
      opacity: 1,
      delay: 16,
      duration: 1,
    },0)
    .to(framesBrain, {
      delay: 19,
      duration: 60,
      frame: 29,
      onUpdate: () => brain.goToAndStop(framesBrain.frame, true),
    },0)
    /*.to('#smoke-full', {
      opacity: 1,
      delay: 50,
      duration: 1,
    },0)
     
    .to('#brain', {
      opacity: 0,
      delay: 52,
      duration: 1,
    },0)
    .to('#scene', {
      opacity: 1,
      delay: 55,
      duration: 1,
      onStart: ()=>{
        this.video.nativeElement.muted = true;
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
      },
      onComplete: ()=>{
        this.video.nativeElement.play();
        this.video.nativeElement.muted = false;
      }
    },0)
    .to('#animation', {
      translateX: '-150%',
      delay: 60,
      duration: 1,
    },0)
    .to('#animation', {
      translateX: '0%',
      delay: 90,
      duration: 0,
    },0)
    .to(framesSmokeFull, {
      frame: 0,
      delay: 90,
      duration: 0,
      onUpdate: () => smokeFull.goToAndStop(framesSmokeFull.frame, true),
    },0)
    .to(framesSmokeFull, {
      delay: 90,
      duration: 20,
      frame: 31,
      onUpdate: () => smokeFull.goToAndStop(framesSmokeFull.frame, true),
    },0)
    .to('#scene', {
      opacity: 0,
      delay: 91,
      duration: 1,
      onComplete: ()=>{
        this.video.nativeElement.muted = true;
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
      },
    },0)
    .to('#animation', {
      translateX: '-150%',
      delay: 120,
      duration: 0,
    },0) */
  }

  loadVideoAnimation(): void {

    let smokeFull = lottie.loadAnimation({
      container: this.smokeFull.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
      path: './assets/svg/animations/smoke-full/data.json'
    })

    let framesSmokeFull = { frame: 0 };

    let tl = gsap.timeline({
      id: 'timeline2',
      ease: 'none',
      scrollTrigger: {
        trigger: "#header",
        scrub: 0,
        pin: false, 
        start: "center end",
        markers: false,
        end: () => "+=" + this.container.nativeElement.offsetWidth * 0.6,
      },
      yoyo: false,
      onComplete: ()=>{
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
        this.video.nativeElement.muted = true;
      }
    });

    tl.set('#scene', {
      opacity: 0
    },0)
    .set('#smoke-full', {
      opacity: 0,
    },0)
    .to('#brain', {
      opacity: 0,
      delay: 1.1,
      duration: .1,
    },0)
    .to('#smoke-full', {
      opacity: 1,
      delay: 0,
      duration: .1,
    },0)
    .to(framesSmokeFull, {
      delay: 1,
      duration: 20,
      frame: 31,
      onUpdate: () => smokeFull.goToAndStop(framesSmokeFull.frame, true),
    },0)
    .to('#scene', {
      opacity: 1,
      delay: 5,
      duration: 1,
      onStart: ()=>{
        this.video.nativeElement.muted = true;
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
      },
      onComplete: ()=>{
        this.video.nativeElement.play();
        this.video.nativeElement.muted = false;
      }
    },0)
    .to('#animation', {
      translateX: '-200vw',
      delay: 6,
      duration: 1,
    },0)
    .to('#scene', {
      opacity: 0,
      delay: 40,
      duration: 1,
    },0)
    .to('#animation', {
      translateX: '0vw',
      delay: 30,
      duration: 1,
      onComplete: ()=>{
        this.video.nativeElement.muted = true;
        this.video.nativeElement.pause();
        this.video.nativeElement.currentTime = 0;
      },
    },0)
    .to(framesSmokeFull, {
      delay: 25,
      duration: 1,
      frame: 0,
      onComplete: () => smokeFull.goToAndStop(framesSmokeFull.frame, true),
    },0)
    .to('#smoke-full', {
      opacity: 1,
      delay: 35,
      duration: 1,
    },0)
    .to(framesSmokeFull, {
      delay: 35,
      duration: 20,
      frame: 31,
      onUpdate: () => smokeFull.goToAndStop(framesSmokeFull.frame, true),
    },0)
    .to('#scene', {
      opacity: 0,
      delay: 55,
      duration: .1,
    },0)
    .to('#animation', {
      translateX: '-200vw',
      delay: 60,
      duration: 1,
    },0)
    .to('#scene', {
      translateX: '-200vw',
      delay: 60,
      duration: .1,
    },0)
  }

  loadProjectsAnimation(): void {

    if(!this.isMobile){
      this.sliderItems = gsap.utils.toArray('.slider-item');

      for(let i = 0; i < this.sliderItems.length; i++){
        var $image = this.sliderItems[i]?.querySelector('.image');
        var $title = this.sliderItems[i]?.querySelector('.title-slider');
        
        var triggerItem = gsap.timeline({
          id: 'timeline2',
          ease: 'power3',
          yPercent: 0,
          defaults: {
            duration: 1,
            ease: 'none',
            transition: 'initial'
          },
          scrollTrigger: {
            trigger: this.sliderItems[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
          yoyo: false
        });

        if($title){
          gsap.set($title, {
            translateY: -600,
            'will-change': 'opacity, transform',
            opacity: 0.0001
          });
          triggerItem.to($title, {
            translateY: 0,
            opacity: 1,
            ease: 'power3',
            stagger: {
              each: 0.06,
              from: 0
            }
          }, 0);
          triggerItem.to($title, {
            id: 'timeline2',
            translateY: 600,
            opacity: 0.0001,
            delay: 0.4,
            ease: 'power3',
            stagger: {
              each: 0.06,
              from: 0
            }
          }, 1);
        }

        if($image.children[0]){
          gsap.set($image.children[0], {
            y: '-700px',
            scale: 1
          });

          triggerItem.to($image.children[0], {
            y: '500px',
            scale: 1,
            duration: 2
          }, 0);
        }
          
      }
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrolled = true;
  }
}
