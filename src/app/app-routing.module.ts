import { HomeComponent } from './general/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionComponent } from './general/construction/construction.component';

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
  { path: 'General/Home', component: HomeComponent },
  { path: '**', component: ConstructionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
