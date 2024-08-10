import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightSearchService } from '../../services/flight-search/flight-search.service';
interface FlightDetails {
  cabin: string;
  destination: string;
  min_business_miles: number | null;
  min_business_tax: number | null;
  min_economy_miles: number | null;
  min_economy_tax: number | null;
  min_first_miles: number | null;
  min_first_tax: number | null;
  origin: string;
  partner_program: string;
  departureTimeFrom: string;
  departureTimeTo: string;
}
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  //  for form
  originList: string[] = ['JFK', 'DEL', 'SYD', 'BOM', 'BNE', 'BLR'];
  destinationList: string[] = ['JFK', 'DEL', 'SYD', 'LHR', 'CDG', 'DOH', 'SIN'];
  cabinList: string[] = ['Economy', 'Business', 'First'];
  flightForm: FormGroup;

  //  for list
  loading: boolean = false;
  flights: FlightDetails[] = [];

  constructor(
    private fb: FormBuilder,
    private flightSearchService: FlightSearchService
  ) {
    this.flightForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      cabin: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.flightForm.valid) {
      this.searchFlight(this.flightForm.value);
    } else {
      alert('Form is invalid');
    }
  }

  searchFlight(formData: any) {
    let postData = {
      ...formData,
      departureTimeFrom: '2024-07-09T00:00:00Z',
      departureTimeTo: '2024-10-07T00:00:00Z',
    };
    this.loading = true;
    this.flightSearchService.searchFlight(postData).subscribe({
      next: (data) => {
        this.loading = false;
        this.flights = data;
        console.log({ data });
      },
      error: (err) => {
        this.loading = false;
        alert(JSON.stringify(err));
        console.log({ err });
      },
    });
  }
}
