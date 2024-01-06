import { Component, HostListener } from '@angular/core';
import { ContactUsService } from '../../modals/contact-us/contact-us.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentPosition: number = window.scrollY;
  toggleHeader: boolean = true;
  toggleMobileHeader: boolean = false;
  constructor(private contactUsModalService:ContactUsService){

  }

  toggleMenu(): void {
    this.toggleMobileHeader = !this.toggleMobileHeader;
  }

  open(): void {
    this.contactUsModalService.open();
    this.toggleMobileHeader = false;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let scroll = event.srcElement.scrollingElement.scrollTop;
    if (scroll > this.currentPosition) {
      this.toggleHeader = false;
      this.toggleMobileHeader = false;
    } else {
      this.toggleHeader = true;
      this.toggleMobileHeader = false;
    }
    this.currentPosition = scroll;
  }
}
