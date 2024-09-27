import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../service/interface/reservation";
import {HttpClient} from "@angular/common/http";
import {Location, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {ToolbarComponent} from "../../../../../home/components/toolbar/toolbar.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    MatIcon,
    ToolbarComponent
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{



  confirmedReservations: Reservation[] = [];
  apiUrl = 'http://localhost:3000/destinations';  // Asegúrate de que esta URL esté bien configurada

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  // Cargar reservas desde el servidor JSON
  loadReservations(): void {
    this.http.get<Reservation[]>(this.apiUrl).subscribe((reservations) => {
      this.confirmedReservations = reservations;
    });
  }

  rescheduleReservation(reservation: Reservation): void {
    console.log(`Reprogramando la reserva de ${reservation.driver.name}`);
    // Lógica de reprogramación
  }

  cancelReservation(reservation: Reservation): void {
    console.log(`Cancelando la reserva de ${reservation.driver.name}`);
    // Lógica de cancelación
  }

  openChat(reservation: Reservation): void {
    console.log(`Iniciando chat con ${reservation.driver.name}`);
    // Lógica para iniciar el chat
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }

}
