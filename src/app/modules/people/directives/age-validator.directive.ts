import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';


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

    validate(control: AbstractControl): { [key: string]: any; } {
        console.log(control);
        if (typeof control.value === 'number' && control.value > 0 && control.value < 115) {
            return null
        }
        return {'ageInvalid': {value: control.value}, 'd' : 'a'}
    }
}
