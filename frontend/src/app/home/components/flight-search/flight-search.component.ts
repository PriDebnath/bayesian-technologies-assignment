import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightSearchService } from '../../services/flight-search/flight-search.service';

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

  constructor(
    private fb: FormBuilder,
    private flightSearchService: FlightSearchService
  ) {
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
      this.searchFlight(this.flightForm.value);
    } else {
      // alert("Form is invalid")
    }
  }

  searchFlight(formData: any) {
    let postData = {
      ...formData,
      departureTimeFrom: '2024-07-09T00:00:00Z',
      departureTimeTo: '2024-10-07T00:00:00Z',
    };
    this.flightSearchService.searchFlight(postData).subscribe({
      next: (success) => {
        console.log(success);
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }
}
