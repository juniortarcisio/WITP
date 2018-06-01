import { RandomUtilsService } from './../../shared/services/random-utils.service';
import { getTestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../shared/services/vocabulary.service';

@Component({
  selector: 'app-word-albums-detail',
  templateUrl: './word-albums-detail.component.html',
  styleUrls: ['./word-albums-detail.component.css']
})
export class WordAlbumsDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private _vocabularyService : VocabularyService,
    private _randomUtilsService : RandomUtilsService) { }

  private album : any;

  ngOnInit() {
    const albumName = this.route.snapshot.params['album'];
    var _randomUtilsService = this._randomUtilsService;
    this.album = this._vocabularyService.getWordAlbums().find(x => { 
      var xAlbum = _randomUtilsService.cleanRouteName(x.name);
      return xAlbum == albumName ;
    });
  }

  getRouteName(deck:any) {
    const albumName = this.route.snapshot.params['album'];
    const routename = this._randomUtilsService.cleanRouteName(deck.name);
    return '/Vocabulary/WordAlbums/' + albumName + '/' + routename;
  }

}
