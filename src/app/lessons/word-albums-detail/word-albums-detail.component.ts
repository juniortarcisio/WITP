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
    private _vocabularyService : VocabularyService) { }

  private album : any;

  ngOnInit() {
    const albumName = this.route.snapshot.params['album'];
    this.album = this._vocabularyService.getWordAlbums().find(x => { 
      var xAlbum = x.name.replace(' ','').replace(' ','').replace('&','');
      return xAlbum == albumName ;
    });
  }

  getAnimationDuration(i:number) {
    i++;
    if (i>10)i=10;
    return "animate-duration-x" + i.toString();
  }

  getRouteName(deck:any) {
    const albumName = this.route.snapshot.params['album'];
    const routename = deck.name.replace(' ','').replace(' ','').replace('&','');
    return '/Vocabulary/WordAlbums/' + albumName + '/' + routename;
  }

}
