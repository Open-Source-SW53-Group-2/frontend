import { Routes } from '@angular/router';
import {DestinationComponent} from "./destination/pages/destination/destination.component";
import {LoginComponent} from "./login/components/login/login.component";
import {AuthGuard} from "./login/auth.guard";
import {RegisterComponent} from "./login/components/register/register.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),
    canActivate: [AuthGuard], // Protege con el guard
  },
  {
    path: 'list',
    component: DestinationComponent,
    canActivate: [AuthGuard], // Protege con el guard
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate: [AuthGuard], // Protege con el guard
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservation-cards/reservation-cards.module').then(m => m.ReservationCardsModule),
    canActivate: [AuthGuard], // Protege con el guard
  },
  {
    path: '**',
    redirectTo: 'login',
  },

];
