import { NgModule } from '@angular/core';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
   declarations: [FooterComponent],
   imports: [SharedModule, FooterRoutingModule],
   exports: [FooterComponent],
})
export class FooterModule {}
