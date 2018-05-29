import { VocabularyService } from './../../shared/services/vocabulary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-albums',
  templateUrl: './word-albums.component.html',
  styleUrls: ['./word-albums.component.css']
})
export class WordAlbumsComponent implements OnInit {

  constructor(private _vocabularyService : VocabularyService) { }

  ngOnInit() {
  }

}
