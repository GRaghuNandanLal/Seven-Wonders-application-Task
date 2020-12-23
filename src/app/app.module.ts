import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetraComponent } from './petra/petra.component';
import { GreatwallofchinaComponent } from './greatwallofchina/greatwallofchina.component';
import { PyramidofgizaComponent } from './pyramidofgiza/pyramidofgiza.component';
import { HanginggardensComponent } from './hanginggardens/hanginggardens.component';
import { MaterialModule} from './material/material.module';
import { LighthouseofalexandriaComponent } from './lighthouseofalexandria/lighthouseofalexandria.component';
import { MachupicchuComponent } from './machupicchu/machupicchu.component';

@NgModule({
  declarations: [
    AppComponent,
    TajmahalComponent,
    PetraComponent,
    GreatwallofchinaComponent,
    PyramidofgizaComponent,
    HanginggardensComponent,
    LighthouseofalexandriaComponent,
    MachupicchuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
