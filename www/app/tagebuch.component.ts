import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-tagebuch',
  templateUrl: 'app/tagebuch.component.html',
  styleUrls: ['app/tagebuch.component.css']
})
export class TagebuchComponent implements OnInit {

    constructor(
        private router: Router) { }
        
    ngOnInit() {
    }

}