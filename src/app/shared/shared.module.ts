import { ExpressionService } from './services/expression.service';
import { LanguagesService } from './services/languages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from './entities/language';
import { SpeechService } from './services/speech.service';
import { VocabularyService } from './services/vocabulary.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  providers : [
    LanguagesService,
    Language,
    SpeechService,
    VocabularyService,
    ExpressionService
  ]
})
export class SharedModule { }
