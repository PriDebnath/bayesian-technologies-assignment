import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  originList: string[] = ['JFK', 'DEL', 'SYD', 'BOM', 'BNE', 'BLR'];
  destinationList: string[] = ['JFK', 'DEL', 'SYD', 'LHR', 'CDG', 'DOH', 'SIN'];
  cabinList: string[] = ['Economy', 'Business', 'First'];

  flightForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      cabin: ['', Validators.required],
      // proFilters: [false],
    });
  }

  handleSubmit() {
    console.log(this.flightForm.valid, '-', this.flightForm.value);
    if (this.flightForm.valid) {
      console.log(this.flightForm.value);
    } else {
      // alert("Form is invalid")
    }
  }
}
