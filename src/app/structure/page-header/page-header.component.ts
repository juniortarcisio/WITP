import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { LanguagesService } from '../../shared/services/languages.service';
import { SpeechService } from '../../shared/services/speech.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  languagex:any;

  constructor(
    private ss:SessionService, 
    private languageService:LanguagesService,
    private speechService:SpeechService
  ) { }

  ngOnInit() {
    this.ss.currentLanguage.subscribe(language => this.languagex = language)
  }

}
