import {FlightEventService} from "./flight-event.service";
import {Flight} from "../entities/flight";
import {Component} from '@angular/core';

@Component({
    selector: 'flight-history',
    templateUrl: './flight-history.component.html'
})
export class FlightHistoryComponent {

    flights: Flight[] = [];

    constructor(private flightEventService: FlightEventService) {
        flightEventService.flightSelected.subscribe(f => {

            if (this.flights.length >= 3) {
                this.flights.splice(0, 1);
            }

            this.flights.push(f);
        });
    }


}