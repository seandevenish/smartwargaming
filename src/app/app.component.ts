import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'swg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'smart-wargaming';

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(e => e as NavigationEnd),
      // tap(e => console.log('Routed to ' + e.url, e, this.router.routerState.snapshot)),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    )
    .subscribe(route => this.titleService.setTitle('Cirrus' + this.getTitle(route)));
  }

  private getTitle(route: ActivatedRoute) {
    let title: string = null;
    do {
      if (route && route.snapshot.data && route.snapshot.data && route.snapshot.data.title) {
        title = route.snapshot.data.title;
      }
      route = route.parent;
    } while (route.parent && !title);

    if (!title) { return ''; } else { return ` | ${title}`; }

  }

}
