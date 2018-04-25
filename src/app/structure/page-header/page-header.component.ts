import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  language:any;

  constructor(private ss:SessionService) { }

  ngOnInit() {
    this.ss.currentLanguage.subscribe(language => this.language = language)
  }

}
