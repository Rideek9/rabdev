import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { NavigationModule } from './components/navigation/navigation.module';

import { FooterModule } from './components/footer/footer.module';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, HeaderModule, NavigationModule, FooterModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
