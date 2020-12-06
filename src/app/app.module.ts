
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    DataService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
