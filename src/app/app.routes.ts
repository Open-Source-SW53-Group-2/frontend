import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirecciona a 'home' por defecto
  { path: '**', component: PageNotFoundComponent }      // Ruta para páginas no encontradas
];
