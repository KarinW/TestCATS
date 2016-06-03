"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
require('./rxjs-operators');
var menu_component_1 = require('./menu.component');
var mapadventure_component_1 = require('./mapadventure.component');
var werkzeuge_component_1 = require('./werkzeuge.component');
var tagebuch_component_1 = require('./tagebuch.component');
// import { MenuDetailComponent } from './menu-detail.component';
var json_service_1 = require('./json.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Geo App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Menu']\" role=\"button\">Start</a>\n            <!--<a href=\"#/menu\" role=\"button\">Start...</a>-->\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            styleUrls: ['css/index.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                json_service_1.JSONService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/menu',
                name: 'Menu',
                component: menu_component_1.MenuComponent,
                useAsDefault: true
            } /*,
            {
              path: '/menu/:id',
              name: 'MenuDetail',
              component: MenuDetailComponent
            }*/,
            {
                path: '/mapadventure',
                name: 'MapAdventure',
                component: mapadventure_component_1.MapAdventureComponent
            },
            {
                path: '/tagebuch',
                name: 'Tagebuch',
                component: tagebuch_component_1.TagebuchComponent
            },
            {
                path: '/werkzeuge',
                name: 'Werkzeuge',
                component: werkzeuge_component_1.WerkzeugeComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map