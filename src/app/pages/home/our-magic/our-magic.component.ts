import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as lottieWeb from 'lottie-web';
import { ContactUsService } from 'src/app/shared/modals/contact-us/contact-us.service';

let lottie = lottieWeb.default;

@Component({
  selector: 'app-our-magic',
  templateUrl: './our-magic.component.html',
  styleUrls: ['./our-magic.component.scss']
})
export class OurMagicComponent  implements OnInit, AfterViewInit, AfterContentInit{
  sliderItems: any;
  @ViewChild('sphere') sphere!: ElementRef;
  
  constructor(private contactModalService: ContactUsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let sphere = lottie.loadAnimation({
      container: this.sphere.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/svg/animations/sphere/data.json'
    }).setSpeed(0.5);
  }

  ngAfterContentInit(): void {
  }

  open(): void {
    this.contactModalService.open();
  }

}
