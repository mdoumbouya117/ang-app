import { AbstractControl, ValidatorFn } from '@angular/forms';
export class CustomValidators {

    public static pattern(reg: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const value = <string>control.value;
            return value && value.match(reg) ? null : { 'pattern': { value } };
        };
    }
}
