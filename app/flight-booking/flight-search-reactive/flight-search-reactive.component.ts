import { CityValidatorDirective } from './../../shared/validation/city.validator';
import {FlightService} from '../flight.service';
import * as http from 'http';
import {Flight} from '../../entities/flight';
import { Component} from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable} from 'rxjs';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
   selector: 'flight-search-reactive',
   templateUrl: './flight-search-reactive.component.html',
   providers: [{ provide: FlightService, useClass: FlightService}],
   styleUrls: ['./flight-search-reactive.component.css'] // Shadow-DOM
})    
export class FlightSearchReactiveComponent {

    filter: FormGroup;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    formMetadata = [
        { label: 'From', name: 'from' },
        { label: 'To', name: 'to'}
    ]

    constructor(private flightService: FlightService, fb: FormBuilder) {

        this.filter = fb.group({
            from: [
                'Graz', 
                [ 
                    Validators.required, 
                    Validators.minLength(3),
                    CityValidatorDirective.validator("Graz,Hamburg,Zürich")
                ]       
            ],
            to: ['Hamburg']
        });

        this.filter.valueChanges.subscribe((changes) => {
            console.debug('changes', changes);
        });

        this.filter.controls['to'].valueChanges.subscribe((changes) => {
            console.debug('to changes', changes);
        });
    }
    
    search() {

        let values = this.filter.value;

        return new Promise((resolve, reject) => { 
        //    return new Observable(control => { 

            this
                .flightService
                .find(values.from, values.to)
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
    }

}

