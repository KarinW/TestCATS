import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { MenuEntry } from './menuentry';
import { JSONService } from './json.service';
import './rxjs-operators';

@Component({
  selector: 'my-menu',
  templateUrl: 'views/menu.component.html',
  styleUrls: ['css/index.css']
})

export class MenuComponent implements OnInit {

    menuSelection: MenuEntry[];
    selectedEntry: MenuEntry;
    errorMessage: string;
    mode = 'Observable';

    constructor(
        private router: Router,
        private jsonService : JSONService) { }

    ngOnInit() {
       this.getMenu();
    }

    getMenu() {
        this.jsonService.getMenu().subscribe(
           menuSelection => this.menuSelection = menuSelection,
           error =>  this.errorMessage = <any>error);
        /*   this.jsonService.getMenu().then(menuSelection => this.menuSelection = menuSelection);
           console.log("TEST: " + this.menuSelection);*/
    }
    
    onSelect(menuentry: MenuEntry) { 
        this.selectedEntry = menuentry; 
        //gotoDetail();    
    }
    
    gotoDetail() {
        this.router.navigate(['MenuDetail', { id: this.selectedEntry.id }]);
    }
}