import { Directive, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// input[city] --> <input city="Hamburg,Graz,Zürich">
// city --> <city>
// .city --> <div class="city">
// #city --> <div id="city">
// form input[city] --> <form> <input city> </form>

@Directive({
    selector: 'input[city]',
    providers: [{ 
        provide: NG_VALIDATORS, 
        useExisting: CityValidatorDirective, 
        multi: true 
    }]
})
export class CityValidatorDirective implements Validator {

    constructor(@Attribute('city') private city: string) {
    }

   static validator(cities: string) {
       let vali = new CityValidatorDirective(cities);
       return vali.validate.bind(vali);
   }

   validate(c: AbstractControl): any {

       let allowed = this.city.split(',');

       if (allowed.indexOf(c.value) == -1) {
           return {
               city: {
                   actual: c.value,
                   allowed: allowed,
                   hotline: '112'
               }
           }
       }

       return { };

       

   }

}