import {FlightService} from '../flight.service';
import * as http from 'http';
import {Flight} from '../../entities/flight';
import { Component} from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable} from 'rxjs';
import {FlightEventService} from "../../flight-history/flight-event.service";

@Component({
   selector: 'flight-search',
   templateUrl: './flight-search.component.html',
   providers: [{ provide: FlightService, useClass: FlightService}],
   styleUrls: ['./flight-search.component.css'] // Shadow-DOM
})    
export class FlightSearchComponent {

    from: string = "Hamburg";
    to: string = "Graz";
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor(private flightEventService: FlightEventService,
                private flightService: FlightService) {
    }
    
    search() {

        return new Promise((resolve, reject) => { 
        //    return new Observable(control => { 

            this
                .flightService
                .find(this.from, this.to)
                .subscribe(
                    flights => {
                        this.flights = flights;
                        resolve(flights); 
                    },
                    err => {
                        console.error(err);
                        reject(err);
                    }
                );

        });


    }

    select(f: Flight) {
        this.selectedFlight = f;
        this.flightEventService.flightSelected.next(f);
    }

}

