import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appAgeValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: AgeValidatorDirective,
            multi: true
        }

    ]
})
export class AgeValidatorDirective implements Validator {
    @Input() appAgeValidator: {min: number, max: number};
    @Input() name;

    validate(control: AbstractControl): ValidationErrors | null {
        console.log(this.appAgeValidator);
        console.log(this.name);
        console.log(control);
        if(typeof control.value ==="number" && control.value >= 0 && control.value < 115){
            return null;
        }

        return {status: "error", description : "age invalid"}

    }


}


// ng g c modules/people/Picture