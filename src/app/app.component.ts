import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TravelBookingComponent} from "./confirmation-reservations/components/travel-booking/travel-booking.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TravelBookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
