import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
   declarations: [AppComponent, ProjectsComponent],
   imports: [BrowserModule, AppRoutingModule, HeaderModule, NavigationModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
