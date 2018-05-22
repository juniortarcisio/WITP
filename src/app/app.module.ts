import { GeneralModule } from './general/general.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageFooterComponent } from './structure/page-footer/page-footer.component';
import { PageHeaderComponent } from './structure/page-header/page-header.component';
import { PageMenuComponent } from './structure/page-menu/page-menu.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbComponent } from './structure/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageMenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
