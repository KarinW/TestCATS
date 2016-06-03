import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenuEntry } from './menuentry';
import { MENU } from './mock-menu';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JSONService {

    /* Angular Http client service injected into this service. */
    constructor(private http:Http) {}

    /* Menthod called from menu.component */
    getMenu(): Observable<MenuEntry[]> {
        return this.http.get('categories.json')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
   /* getMenu() {
        return Promise.resolve(MENU);
    }*/
  
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }
}
