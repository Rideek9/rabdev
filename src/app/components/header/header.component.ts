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
      },
      {
         icon: 'rd-social-likedin',
         name: 'Linkedin',
         url: '#',
      },
      {
         icon: 'rd-social-instagram',
         name: 'Instagram',
         url: '#',
      },
   ];
}
