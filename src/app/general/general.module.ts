import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    DonateComponent,
    HomeComponent,
    LegalComponent
  ]
})
export class GeneralModule { }
