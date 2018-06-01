import { RandomUtilsService } from './../../shared/services/random-utils.service';
import { VocabularyService } from './../../shared/services/vocabulary.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word-albums',
  templateUrl: './word-albums.component.html',
  styleUrls: ['./word-albums.component.css']
})
export class WordAlbumsComponent implements OnInit {

  constructor(
    private router: Router, 
    private _vocabularyService : VocabularyService,
    private _randomUtilsService : RandomUtilsService) { }

  ngOnInit() {
  }

  getTotalWordsCount() {
    var sum = 0;
    this._vocabularyService.getWordAlbums().forEach(album => {
      album.decks.forEach(deck => {
        sum += deck.words.length;
      });
    }); 
    return sum;
  }
}
