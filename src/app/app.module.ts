import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeesComponent } from './listemployees/listemployees.component'
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmpolyeeComponent } from './update/update-empolyee/update-empolyee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { UpdateClientComponent } from './update-client/update-client.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddemployeeComponent,
    ListemployeesComponent,
    UpdateEmpolyeeComponent,
    NotFoundComponent,
    AddClientComponent,
    ListClientComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
