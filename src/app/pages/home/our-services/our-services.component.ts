import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  services: Array<any> = [
    {
      name: 'Art',
      detail: 'Specialized in corporate image and brand identity, creating impactful advertising campaigns,<br> innovative product designs, and BTL strategies for a holistic brand experience'
    },
    {
      name: 'Web',
      detail: 'Seamless e-commerce solutions and top-notch web development, ensuring<br>a user-friendly online experience that maximizes your digital presence.'
    },
    {
      name: 'Video',
      detail: 'Top-tier audiovisual services, specializing in compelling spots, visionary<br>art direction, and a skilled filmmaker team, producing impactful reels.'
    },
    {
      name: 'App',
      detail: 'Prioritizing the best user experience through innovative UX/UI design,<br>ensuring functional, intuitive, and visually appealing applications.'
    },
  ]
}
