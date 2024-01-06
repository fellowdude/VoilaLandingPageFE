import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit{
  @ViewChild('container') container?: ElementRef;
    
  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    window.Calendly.initInlineWidget({
      url: "https://calendly.com/wearevoila/30min?background_color=0f0f0f&text_color=ffffff&primary_color=8075FF",
      parentElement: this.container?.nativeElement
    });
  }

}
