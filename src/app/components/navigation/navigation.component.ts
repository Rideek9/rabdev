import { Component } from '@angular/core';
import { NavigationInterface } from '../../modules/interface';

@Component({
   selector: 'app-navigation',
   templateUrl: './navigation.component.html',
   styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
   navigationElement: NavigationInterface[] = [
      {
         title: 'o mnie',
         url: '/',
         active: true,
      },
      {
         title: 'projekty',
         active: true,
         url: '/project',
      },
      {
         title: 'hobby',
         active: true,
         url: '/hobbies',
      },
      {
         title: 'umiejętności',
         active: true,
         url: '/skils',
      },
      {
         title: 'blog',
         active: true,
         url: '/blog',
      },
      {
         title: 'kontakt',
         active: true,
         url: '/contact',
      },
   ];
}
