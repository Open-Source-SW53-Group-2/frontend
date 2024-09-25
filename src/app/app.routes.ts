import {HomeComponent} from "./public/pages/home/home.component";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {PlansComponent} from "./public/pages/plans/plans.component";
import {ServicesComponent} from "./public/pages/services/services.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'plans', component: PlansComponent },
  {path:'services', component: ServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirecciona a 'home' por defecto
  { path: '**', component: PageNotFoundComponent }      // Ruta para páginas no encontradas
];



