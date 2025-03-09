import { Component } from '@angular/core';
import { Apartment } from 'src/app/Core/models/Apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 10, category: 'T2', ResidenceId: 1 }
  ];
addApartment() {
  const newApartment : Apartment ={
    apartNum: 102,
    floorNum: 2,
    surface: 60,
    terrace: false,
    surfaceterrace: 0,
    category: 'T3',
    ResidenceId: 1
  };
  this.apartments.push(newApartment);
}
}
