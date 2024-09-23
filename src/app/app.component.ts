import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {Component} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";
import {FooterComponent} from "./public/components/footer/footer.component";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {NgForOf} from "@angular/common";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, LanguageSwitcherComponent, MatToolbarModule, MatButtonModule, RouterLink, NgForOf, HomeComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  options = [
    { path: '/home', title: 'Home' }
  ]
}
