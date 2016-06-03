import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import './rxjs-operators';

import { MenuComponent } from './menu.component';
import { MapAdventureComponent } from './mapadventure.component';
import { WerkzeugeComponent } from './werkzeuge.component';
import { TagebuchComponent } from './tagebuch.component';
// import { MenuDetailComponent } from './menu-detail.component';
import {JSONService } from './json.service'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Menu']" role="button">Start</a>
            <!--<a href="#/menu" role="button">Start...</a>-->
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['css/index.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        JSONService
    ]
})
@RouteConfig([
  {
    path: '/menu',
    name: 'Menu',
    component: MenuComponent,
    useAsDefault: true
  }/*,
  {
    path: '/menu/:id',
    name: 'MenuDetail',
    component: MenuDetailComponent
  }*/
  ,
  {
    path: '/mapadventure',
    name: 'MapAdventure',
    component: MapAdventureComponent
  },
  {
    path: '/tagebuch',
    name: 'Tagebuch',
    component: TagebuchComponent
  },
  {
    path: '/werkzeuge',
    name: 'Werkzeuge',
    component: WerkzeugeComponent
  }
])

export class AppComponent { 
    title = 'Geo App';
}