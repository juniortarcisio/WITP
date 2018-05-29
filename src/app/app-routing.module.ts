import { HomeComponent } from './general/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionComponent } from './general/construction/construction.component';
import { WordAlbumsComponent } from './lessons/word-albums/word-albums.component';
import { WorldAlbumsDetailComponent } from './lessons/world-albums-detail/world-albums-detail.component';

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
  { path: 'Vocabulary/WordAlbums/:album', component: WorldAlbumsDetailComponent },
  { path: 'Vocabulary/WordAlbums', component: WordAlbumsComponent },
  { path: 'General/Home', component: HomeComponent },
  { path: '**', component: ConstructionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
