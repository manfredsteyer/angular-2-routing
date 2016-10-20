import { Subject } from 'rxjs';
import {Flight} from "../entities/flight";

export class FlightEventService {

    public flightSelected = new Subject<Flight>();

}