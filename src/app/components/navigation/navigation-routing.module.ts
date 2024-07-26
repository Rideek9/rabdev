import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
// import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
   { path: 'project', loadChildren: () => import('../projects/projects.module').then((m) => m.ProjectsModule) },
   { path: 'about', component: AboutComponent },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class NavigationRoutingModule {}
