import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/models/residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listResidences : Residence []= [
    {id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible"},
    {id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible"},
    {id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu"},
    {id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction"}
  ];

}
