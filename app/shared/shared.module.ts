import { CityValidatorDirective } from './validation/city.validator';
import {CityPipe} from './pipes/city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe, CityValidatorDirective
    ],
    providers: [
    ],
    exports: [
        CityPipe, CityValidatorDirective
    ]  
})
export class SharedModule {
}