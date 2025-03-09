import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './components/apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
