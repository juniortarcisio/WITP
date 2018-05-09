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

  constructor(
    private ss:SessionService, 
    private languageService:LanguagesService,
    private speechService:SpeechService
  ) { }

  ngOnInit() {
  }

  types = [
    { id : 0, name: 'number'},
    { id : 1, name: 'string'},
    { id : 2, name: 'date'},
    { id : 3, name: 'decimal'}
  ];

  selectedType = 0;

  selectedTypeValue : any;

}
