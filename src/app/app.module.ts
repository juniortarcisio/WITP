import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageFooterComponent } from './structure/page-footer/page-footer.component';
import { PageHeaderComponent } from './structure/page-header/page-header.component';
import { PageMenuComponent } from './structure/page-menu/page-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
