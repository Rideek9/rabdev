import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
   declarations: [AboutComponent],
   imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}
