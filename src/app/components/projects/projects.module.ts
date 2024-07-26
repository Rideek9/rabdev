import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
   declarations: [],
   imports: [SharedModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
