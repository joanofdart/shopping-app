import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    CarouselModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
