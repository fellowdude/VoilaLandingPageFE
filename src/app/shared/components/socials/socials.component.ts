import { Component } from '@angular/core';
import { ISocial } from '../../interfaces/social.interface';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
  socials: Array<ISocial> = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/wearevoila.io/',
      icon: 'bxl-instagram'
    },
    {
      name: 'Behance',
      link: 'https://www.behance.net/wearevoila_io/projects',
      icon: 'bxl-behance'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/voilaagency/about/',
      icon: 'bxl-linkedin'
    }
  ]
}
