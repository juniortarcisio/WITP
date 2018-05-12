import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../shared/services/languages.service';
import { SpeechService } from '../../shared/services/speech.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor(
    private languageService:LanguagesService,
    private speechService:SpeechService
  ) { }

  ngOnInit() {
  }
}
