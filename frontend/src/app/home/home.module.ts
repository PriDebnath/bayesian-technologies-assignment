import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [FlightSearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, // its routing
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
})
export class HomeModule {}
