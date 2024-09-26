import { Component, OnInit } from '@angular/core';
import {ReserveEntity} from "../../model/reserve.entity";
import {TripContentComponent} from "../trip-content/trip-content.component";
import {TripsService} from "../../services/trips-api.service";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [
    TripContentComponent,
    HttpClientModule,

  ],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.css'
})
export class TripListComponent implements OnInit{
  reservations: ReserveEntity[] = [];

  constructor(private tripService: TripsService) {}

  ngOnInit(): void {
    this.tripService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

}
