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
    currentDate.setHours(0,0,0,0);  //Setting time to 0 for equals condition

    if(bookingDate < currentDate) {
      return { pastDateSelected: true }
    }
    return null;
  }

  static timeChecker: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let bookingTime: string = control.value;


    // Converting to date object for easier comparision
    let minTime = new Date(2020,2,8,9,0);
    let maxTime = new Date(2020,2,8,18,0);
    let bookTime = new Date(2020,2,8,parseInt(bookingTime.slice(0,2)),parseInt(bookingTime.slice(3)));

    if(bookTime < minTime || bookTime > maxTime) {
      return { timeOutOfLimit: true }
    }
    return null;
  }

  static toFromTimeChecker: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    let fromTime: string = control.get('bookingFromTime').value;
    let toTime: string = control.get('bookingToTime').value;

    // Converting to date object for easier comparision
    let fromTimeObject = new Date(2020,2,8,parseInt(fromTime.slice(0,2)),parseInt(fromTime.slice(3)));
    let toTimeObject = new Date(2020,2,8,parseInt(toTime.slice(0,2)),parseInt(toTime.slice(3)));

    let dateDifference = toTimeObject.getTime() - fromTimeObject.getTime();

    if(dateDifference < 0) {
      return { fromLessThanToTime: true }
    }
    else if(dateDifference >= 0 && dateDifference < (30*60*1000)) {
      return { lessThanMinDuration: true }
    }
    return null;
  }

}
