import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouting } from './routing';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
     PageNotFoundComponent,
     HeaderComponent,
     HomeComponent,
     AboutusComponent
  ],
  imports: [
    BrowserModule,AppRouting,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
