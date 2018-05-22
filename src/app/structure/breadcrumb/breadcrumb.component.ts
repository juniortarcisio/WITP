import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs : Array<any>;

  constructor(private router:Router) { 
    router.events.subscribe(e => {      
      if (e instanceof NavigationEnd)
        this.refreshRoute(e);
    });
  }

  refreshRoute(e:NavigationEnd) {
    const routes = e.url.split('/').filter(v=> v !== '');
    this.breadcrumbs = [];

    for (var i = 0; i <= routes.length - 1; i++) {
        var route_i = {
          name : routes[i].replace(/([A-Z])/g, ' $1').trim(),
          link : ''
        };

        for (var j = i; j >= 0; j--)
            route_i.link = routes[j] + '/' + route_i.link;

        route_i.link = route_i.link;

        this.breadcrumbs.push(route_i);
    }
  }

  ngOnInit() { }

}
