import {Component} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(router: Router) {
        router.events.filter(e => e instanceof NavigationStart).subscribe(e => {
            console.debug('router event', e);
        });
    }

}

