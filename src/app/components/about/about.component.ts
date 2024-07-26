import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
   selector: 'app-about',
   templateUrl: './about.component.html',
   styleUrl: './about.component.sass',
})
export class AboutComponent implements OnInit {
   value!: number;
   constructor(private GlobalSerive: GlobalService) {}

   ngOnInit(): void {
      this.GlobalSerive.currentValue.subscribe((value) => {
         this.value = value;
      });
   }
}
