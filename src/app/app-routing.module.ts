import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { GreatwallofchinaComponent } from './greatwallofchina/greatwallofchina.component';
import { HanginggardensComponent } from './hanginggardens/hanginggardens.component';
import { LighthouseofalexandriaComponent } from './lighthouseofalexandria/lighthouseofalexandria.component';
import { MachupicchuComponent } from './machupicchu/machupicchu.component';
import { PetraComponent } from './petra/petra.component';
import { PyramidofgizaComponent } from './pyramidofgiza/pyramidofgiza.component';

const routes: Routes = [
  {path: 'tajmahal',component:TajmahalComponent},
  {path: 'greatwallofchina',component:GreatwallofchinaComponent},
  {path: 'hanginggardens',component:HanginggardensComponent},
  {path: 'lighthouseofalexandria',component:LighthouseofalexandriaComponent},
  {path: 'machupicchu',component:MachupicchuComponent},
  {path: 'petra',component:PetraComponent},
  {path: 'pyramidofgiza',component:PyramidofgizaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
