import {Component, OnInit} from '@angular/core';
import {ServiceDestination} from "../../services/interfaces/destinationApi";
import {DestinationApiService} from "../../services/destination-api.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle, MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    MatCardFooter,
    MatCardTitleGroup,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    MatIcon
  ],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})

export class DestinationCardComponent implements OnInit {

  serviceList: ServiceDestination[] = [];
  paginatedList: ServiceDestination[][] = [];
  currentPage: number = 0;

  constructor(private serviceAPI: DestinationApiService) { }

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.serviceAPI.getService().subscribe({
      next: (result) => {
        if (result && result.universidades) {
          this.serviceList = result.universidades;
          this.paginateList();
        } else {
          console.error('Error: Missing universidades property in response');
        }
      },
      error: (err) => {
        console.error('Error fetching service data:', err);
      }
    });
  }

  paginateList() {
    for (let i = 0; i < this.serviceList.length; i += 4) {
      this.paginatedList.push(this.serviceList.slice(i, i + 4));
    }
  }

  nextPage() {
    if (this.currentPage < this.paginatedList.length - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
