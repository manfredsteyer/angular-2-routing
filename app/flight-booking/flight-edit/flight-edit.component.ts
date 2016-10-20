import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'flight-edit',
    template: `
        <h1>Flight Edit!</h1>
        <p>Id: {{id}}</p>
    `
})
export class FlightEditComponent  {
    id: string;
    constructor(route: ActivatedRoute) { 

        route.params.subscribe(p => {
            this.id = p['id'];
        });

    }

}