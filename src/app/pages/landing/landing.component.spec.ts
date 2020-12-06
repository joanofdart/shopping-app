import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { LandingRoutingModule } from './landing-routing.module';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LandingComponent
      ],
      imports: [
        CommonModule,
        MatToolbarModule,
        CarouselModule,
        LandingRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have at least 3 images', () => {
    expect(component.slides.length).toEqual(3);
  });
});
