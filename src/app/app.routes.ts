import { Routes } from '@angular/router';
import {DestinationCardComponent} from "./destination/pages/destination-card/destination-card.component";

export const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),
  },
  {
    path: 'destination-card',
    component: DestinationCardComponent,
  },
  {
    path: 'list',
    component: DestinationCardComponent,
  }
  // },
  // {
  //   path: '**',
  //   redirectTo: 'maps',
  // }
];
