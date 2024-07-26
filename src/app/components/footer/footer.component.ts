import { Component } from '@angular/core';
import { FooterInterface } from '../../modules/interface';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.sass',
})
export class FooterComponent {
   footerElements: FooterInterface[] = [
      {
         active: true,
         name: 'HTML5',
         iconName: 'rd-icon-html',
         size: '3',
      },
      {
         active: true,
         name: 'CSS',
         iconName: 'rd-icon-css',
         size: '3',
      },
      {
         active: true,
         name: 'JS',
         iconName: 'rd-icon-js',
         size: '3',
      },
      {
         active: true,
         name: 'REACT',
         iconName: 'rd-icon-react',
         size: '4',
      },
      {
         active: true,
         name: 'NODE',
         iconName: 'rd-icon-nodejs',
         size: '3',
      },
      {
         active: true,
         name: 'SASS',
         iconName: 'rd-icon-sass',
         size: '5',
      },
      {
         active: true,
         name: 'AFFINITY',
         iconName: 'rd-icon-affinity',
         size: '3',
      },
      {
         active: true,
         name: 'COREL',
         iconName: 'rd-icon-coreldraw',
         size: '2.5',
      },
      {
         active: true,
         name: 'ILLUSTRATOR',
         iconName: 'rd-icon-illustrator',
         size: '3',
      },
      {
         active: true,
         name: 'PHOTOSHOP',
         iconName: 'rd-icon-photoshop',
         size: '3',
      },
      {
         active: true,
         name: 'GIT',
         iconName: 'rd-icon-git',
         size: '3',
      },
      {
         active: true,
         name: 'ANGULAR',
         iconName: 'rabdev-icon-angular',
         size: '2.5',
      },
      {
         active: true,
         name: 'PYTHON',
         iconName: 'rabdev-icon-python',
         size: '2.5',
      },
   ];
}
