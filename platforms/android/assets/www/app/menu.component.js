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
var json_service_1 = require('./json.service');
require('./rxjs-operators');
var MenuComponent = (function () {
    function MenuComponent(router, jsonService) {
        this.router = router;
        this.jsonService = jsonService;
        this.mode = 'Observable';
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.jsonService.getMenu().subscribe(function (menuSelection) { return _this.menuSelection = menuSelection; }, function (error) { return _this.errorMessage = error; });
        /*   this.jsonService.getMenu().then(menuSelection => this.menuSelection = menuSelection);
           console.log("TEST: " + this.menuSelection);*/
    };
    MenuComponent.prototype.onSelect = function (menuentry) {
        this.selectedEntry = menuentry;
        //gotoDetail();    
    };
    MenuComponent.prototype.gotoDetail = function () {
        this.router.navigate(['MenuDetail', { id: this.selectedEntry.id }]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'my-menu',
            templateUrl: 'views/menu.component.html',
            styleUrls: ['css/index.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, json_service_1.JSONService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map