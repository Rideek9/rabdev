import { Component } from '@angular/core';
import { SocialMedia } from '../../modules/interface';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrl: './header.component.sass',
})
export class HeaderComponent {
   medias: SocialMedia[] = [
      {
         name: 'Twitter',
         icon: 'rd-social-twitter',
         url: '#',
         active: false,
      },
      {
         icon: 'rd-social-likedin',
         name: 'Linkedin',
         url: 'https://www.linkedin.com/in/damian-rabiński-07b265113',
         active: true,
      },
      {
         icon: 'rd-social-instagram',
         name: 'Instagram',
         url: '#',
         active: false,
      },
   ];

   language = 'pl';

   changeLanguage() {
      if (this.language === 'pl') {
         this.language = 'en';
      } else {
         this.language = 'pl';
      }
   }
}
