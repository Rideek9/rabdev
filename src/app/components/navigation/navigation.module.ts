import { NgModule } from '@angular/core';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
   declarations: [NavigationComponent],
   imports: [SharedModule, NavigationRoutingModule],
   exports: [NavigationComponent],
})
export class NavigationModule {}
