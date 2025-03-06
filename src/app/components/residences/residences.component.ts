import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  showLocation(residence: Residence) {
    if (residence.address.toLowerCase() === "inconnu") {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      alert(`Adresse de ${residence.name} : ${residence.address}`);
    }
  }
  favorites: Residence[] = [];
  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
      alert(`${residence.name} a été ajouté à vos favoris.`);
    }
  }
  
  searchItem: string = '';
  filteredResidences() {
    // Filtre les résidences en fonction de l'adresse
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
