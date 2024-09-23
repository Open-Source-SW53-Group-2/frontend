import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
