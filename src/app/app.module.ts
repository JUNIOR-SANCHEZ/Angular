import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConversorPipe } from './pipes/conversor.pipe'


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    FrutaComponent,
    HomeComponent,
    ContactComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
