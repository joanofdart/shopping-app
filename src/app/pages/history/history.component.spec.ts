import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdinalPipeModule } from 'src/app/pipes/ordinal-date.pipe';
import { HistoryRoutingModule } from './history-routing.module';

import { HistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HistoryComponent
      ],
      imports: [
        CommonModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        OrdinalPipeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HistoryRoutingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have data', () => {
    expect(component.dataSource).toBeTruthy();
  });

});
