import { FlightBookingRouterModule } from './flight-booking.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightSearchReactiveComponent } from './flight-search-reactive/flight-search-reactive.component';
import { FlightCardComponent } from './flight-search/flight-card.component';
import {SharedModule} from '../shared/shared.module';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { RouterModule} from '@angular/router'
import {FlightHistoryComponent} from "../flight-history/flight-history.component";

@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule, 
        CommonModule, 
        SharedModule,
        RouterModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent,

        FlightSearchReactiveComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    exports: [
        FlightSearchComponent, 
        FlightSearchReactiveComponent,
        PassengerSearchComponent,
        FlightEditComponent

    ]
})
export class FlightBookingModule {
}