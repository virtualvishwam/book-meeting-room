import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidators {

  constructor() { }


  static dateChecker: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let bookingDate = new Date(control.value);
    let currentDate = new Date();

    if(bookingDate < currentDate) {
      return { pastDateSelected: true }
    }
    return null;
  }

  static timeChecker: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let bookingTime: string = control.value;

    let minTime = new Date(2020,2,8,9,0);
    let maxTime = new Date(2020,2,8,18,0);
    let bookTime = new Date(2020,2,8,parseInt(bookingTime.slice(0,2)),parseInt(bookingTime.slice(3)));

    if(bookTime < minTime || bookTime > maxTime) {
      return { timeOutOfLimit: true }
    }
    return null;
  }
}
