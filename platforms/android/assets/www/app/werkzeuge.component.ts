import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-werkzeuge',
  templateUrl: 'app/werkzeuge.component.html',
  styleUrls: ['app/werkzeuge.component.css']
})
export class WerkzeugeComponent implements OnInit {

    constructor(
        private router: Router) { }
        
    ngOnInit() {
    }

}