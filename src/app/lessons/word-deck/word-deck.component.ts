import { LanguagesService } from './../../shared/services/languages.service';
import { VocabularyService } from './../../shared/services/vocabulary.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-deck',
  templateUrl: './word-deck.component.html',
  styleUrls: ['./word-deck.component.css']
})
export class WordDeckComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private _vocabularyService : VocabularyService,
    private _languageService:LanguagesService) { }

  private deck : any;

  ngOnInit() {
    const albumName = this.route.snapshot.params['album'];
    const deckName = this.route.snapshot.params['deck'];

    var album = this._vocabularyService.getWordAlbums().find(x => { 
      var xAlbum = x.name.replace(' ','').replace(' ','').replace('&','');
      return xAlbum == albumName ;
    });

    this.deck = album.decks.find(x=> x.name.replace(' ','').replace(' ','').replace('&','') == deckName);
  }

  getAnimationDuration(i:number) {
    i++;
    return "animate-duration-x" + i.toString();
  }
}
