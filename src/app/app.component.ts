import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
   title = 'rabdev';

   constructor(private GlobalService: GlobalService) {}

   ngOnInit() {
      document.addEventListener('DOMContentLoaded', () => {
         const scrollableContainer = document.getElementById('scrollElement');

         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-expect-error
         scrollableContainer.addEventListener('scroll', (event) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.GlobalService.updateValue(event.target.scrollTop);
         });
      });
   }
}
