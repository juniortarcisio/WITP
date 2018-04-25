import { LanguagesService } from './services/languages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './services/session.service';
import { Language } from './entities/language';
import { SpeechService } from './services/speech.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  providers : [
    SessionService,
    LanguagesService,
    Language,
    SpeechService
  ]
})
export class SharedModule { }
