import { VocabularyService } from './../../shared/services/vocabulary.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word-albums',
  templateUrl: './word-albums.component.html',
  styleUrls: ['./word-albums.component.css']
})
export class WordAlbumsComponent implements OnInit {

  constructor(private router: Router, private _vocabularyService : VocabularyService) { }

  ngOnInit() {
  }

  getRouteName(album:any) {
    const routename = album.name.replace(' ','').replace(' ','').replace('&','');
    return '/Vocabulary/WordAlbums/' + routename;
  }
}
