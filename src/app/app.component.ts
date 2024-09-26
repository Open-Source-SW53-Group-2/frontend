import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TripListComponent} from "./booking/components/trip-list/trip-list.component";
import {TripsService} from "./booking/services/trips-api.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  trips: any[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.tripsService['getTrips']().subscribe((data: any[]) => {
      this.trips = data;
    });
  }
}
