import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {StudioComponent} from './studio/studio.component';
import {SamplesComponent} from './samples/samples.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MikematthewsComponent } from './demo/mikematthews/mikematthews.component';
import { BernieconwayComponent } from './demo/bernieconway/bernieconway.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    StudioComponent,
    SamplesComponent,
    MikematthewsComponent,
    BernieconwayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
