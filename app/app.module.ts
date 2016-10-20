import { HomeComponent } from './home/home.component';
import {AppRouterModule, APP_ROUTE_PROVIDERS} from './app.routes';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {FlightEventService} from "./flight-history/flight-event.service";
import {FlightHistoryComponent} from "./flight-history/flight-history.component";



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        //FlightBookingModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FlightHistoryComponent
    ],
    providers: [
        APP_ROUTE_PROVIDERS,
        FlightEventService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}