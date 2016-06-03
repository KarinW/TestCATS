import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-mapadventure',
  templateUrl: 'app/mapadventure.component.html',
  styleUrls: ['app/mapadventure.component.css']
})
export class MapAdventureComponent implements OnInit {

    constructor(
        private router: Router) { }
        
    ngOnInit() {
    }

}