import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class GlobalService {
   private valueSource = new BehaviorSubject<number>(0);
   currentValue = this.valueSource.asObservable();
   constructor() {}

   updateValue(value: number) {
      this.valueSource.next(value);
   }
}
