import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  originList: string[] = ['JFK', 'DEL', 'SYD', 'BOM', 'BNE', 'BLR'];

  flightForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      cabin: ['economy', Validators.required],
      proFilters: [false],
    });
  }

  onSearch() {
    if (this.flightForm.valid) {
      // Implement your search logic here
      console.log(this.flightForm.value);
    }
  }
}
