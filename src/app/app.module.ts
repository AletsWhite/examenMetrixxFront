import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { TramiteUnoComponent } from './tramite-uno/tramite-uno.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { TramiteDosComponent } from './tramite-dos/tramite-dos.component';
import { TramiteTresComponent } from './tramite-tres/tramite-tres.component';
import { TramitesComponent } from './tramites/tramites.component';



@NgModule({
  declarations: [
    AppComponent,
    TramiteUnoComponent,
    NavBarComponent,
    MainComponent,
    TramiteDosComponent,
    TramiteTresComponent,
    TramitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
