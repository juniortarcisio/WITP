import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { SimilarWordsComponent } from './similar-words/similar-words.component';
import { WordAlbumsComponent } from './word-albums/word-albums.component';
import { WordAlbumsDetailComponent } from './word-albums-detail/word-albums-detail.component';
import { WordDeckComponent } from './word-deck/word-deck.component';
import { ExpressionAlbumsComponent } from './expression-albums/expression-albums.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    FlashcardsComponent,
    SimilarWordsComponent,
    WordAlbumsComponent,
    WordAlbumsDetailComponent,
    WordDeckComponent,
    ExpressionAlbumsComponent
  ]
})
export class LessonsModule { }
