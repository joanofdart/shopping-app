import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Slide } from 'src/app/components/carousel/carousel.component';
import { Starship } from 'src/app/models/starship';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  starships: Starship[] = [];
  slides: Slide[] = [
    {
      url: 'assets/starships/millennium-falcon.jpg',
      description: 'Millennium Falcon: Worth every single penny',
    },
    {
      url: 'assets/starships/x-wing.jpg',
      description: 'X-Wing: Get there, as fast as possible.',
    },
    {
      url: 'assets/starships/y-wing.jpeg',
      description: 'Y-Wing: Get there, with style.',
    },
  ];
  @ViewChild('slider') slider!: ElementRef;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchStarships();
  }

  async fetchStarships() {
    this.starships = await this.apiService.getStarships();
  }
}
