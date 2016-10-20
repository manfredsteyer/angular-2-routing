import { HomeComponent } from './home/home.component';
import {Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route, } from '@angular/router';
import { Observable} from 'rxjs';

const APP_ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flights',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    }
];


export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        return Observable.of(true).delay(7000).flatMap(_ => fn());

    }

}

export const APP_ROUTE_PROVIDERS = [CustomPreloadingStrategy];

export var AppRouterModule = RouterModule.forRoot(APP_ROUTE_CONFIG, { preloadingStrategy: CustomPreloadingStrategy });