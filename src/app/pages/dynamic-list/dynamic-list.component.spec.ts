import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdinalPipeModule } from 'src/app/pipes/ordinal-date.pipe';
import { DynamicListRoutingModule } from './dynamic-list-routing.module';

import { DynamicListComponent } from './dynamic-list.component';

describe('DynamicListComponent', () => {
  let component: DynamicListComponent;
  let fixture: ComponentFixture<DynamicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicListComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        OrdinalPipeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DynamicListRoutingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add value to selected datasource', () => {
    const product = component.availableProducts.data[0];
    component.addRemoveProductFromSources(product, component.selectedProducts, component.availableProducts);
    expect(component.selectedProducts.data).toContain(product);
    expect(component.availableProducts.data).not.toContain(product);
  });
});
