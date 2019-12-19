import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SelectRequiredValidatorDirective,
            multi: true  //To specify that we want to add our validator to the list of validators, we set multi property to true
        }]
})
export class SelectRequiredValidatorDirective implements Validator {
    // Create input property to receive the
    // specified default option value
    @Input() appSelectValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.appSelectValidator ? { 'defaultSelected': true } : null;
    }
}


//To use a custom validator in template driven forms, we have to create the validator as a directive.

//NG_VALIDATORS is a collection of validators.
//It already contains all the built-in validators like required, pattern etc.



//AbstractControl extends both FormControl and FormGroup.
//This function returns an object if the validation fails or null if the validation succeeds.
//validate(control: AbstractControl): { [key: string]: any } | null
