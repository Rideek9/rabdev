import { NgModule } from '@angular/core';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
   declarations: [HeaderComponent],
   imports: [SharedModule, HeaderRoutingModule],
   exports: [HeaderComponent],
})
export class HeaderModule {}
