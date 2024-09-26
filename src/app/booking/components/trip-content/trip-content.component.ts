import {Component, Input} from '@angular/core';
import {ReserveEntity} from "../../model/reserve.entity";
import {MatCard} from "@angular/material/card";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-trip-content',
  standalone: true,
  imports: [
    MatCard,
    NgClass,
    MatIcon,
    NgIf,
    MatButton
  ],
  templateUrl: './trip-content.component.html',
  styleUrl: './trip-content.component.css'
})
export class TripContentComponent {
  @Input() reserve!: ReserveEntity;

}
