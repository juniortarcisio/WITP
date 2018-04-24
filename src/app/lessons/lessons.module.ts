import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { SimilarWordsComponent } from './similar-words/similar-words.component';
import { WordAlbumsComponent } from './word-albums/word-albums.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlashcardsComponent,
    SimilarWordsComponent,
    WordAlbumsComponent
  ]
})
export class LessonsModule { }
