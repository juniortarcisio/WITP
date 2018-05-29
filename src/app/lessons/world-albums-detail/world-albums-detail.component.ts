import { getTestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../shared/services/vocabulary.service';

@Component({
  selector: 'app-world-albums-detail',
  templateUrl: './world-albums-detail.component.html',
  styleUrls: ['./world-albums-detail.component.css']
})
export class WorldAlbumsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _vocabularyService : VocabularyService) { }

  private album : any;

  ngOnInit() {
    const albumName = this.route.snapshot.params['album'];
    this.album = this._vocabularyService.getWordAlbums().find(x => { 
      var xAlbum = x.name.replace(' ','').replace(' ','').replace('&','');
      return xAlbum == albumName ;
    });
    console.log(this.album);
  }
}
