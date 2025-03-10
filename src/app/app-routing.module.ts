import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './components/apartments/apartments/apartments.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';

const routes: Routes = [
{ path: '**', component: NotFoundComponent } ,
{ path: 'apartments', component: ApartmentsComponent },
{ path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent },
{ path: 'apartments/add', component: AddApartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
