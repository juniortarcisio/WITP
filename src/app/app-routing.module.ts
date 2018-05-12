import { HomeComponent } from './general/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  //{
  //  path: 'heroes',
  //  component: HeroListComponent,
  //  data: { title: 'Heroes List' }
  //},
  //{ path: '',
  //  redirectTo: '/heroes',
  //  pathMatch: 'full'
  //},
  //{ path: 'another', component: AnotherPageComponent },  
  //{ path: 'dynamic', component: DynamicFormComponent },
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
