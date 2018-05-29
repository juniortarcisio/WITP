import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { SimilarWordsComponent } from './similar-words/similar-words.component';
import { WordAlbumsComponent } from './word-albums/word-albums.component';
import { WorldAlbumsDetailComponent } from './world-albums-detail/world-albums-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FlashcardsComponent,
    SimilarWordsComponent,
    WordAlbumsComponent,
    WorldAlbumsDetailComponent
  ]
})
export class LessonsModule { }
