import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        HttpClientModule,

        AppRoutingModule,

        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF, useValue: '/'
        }
      ]
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'Shopping App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Shopping App');
  });

  test(`should have shopping history button`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.shopping-history');
    expect(button).toBeTruthy();
  });

  test(`should have dynamic list button`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.dynamic-list');
    expect(button).toBeTruthy();
  });
});
