import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apartment } from 'src/app/Core/models/Apartment';


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartments: Apartment[] = [];
  newApart:Apartment|undefined;
  
  apartForm = new FormGroup({
    ResidenceId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    apartNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    terrace: new FormControl(false),
    surfaceterrace: new FormControl({ value: '', disabled: true }, Validators.pattern("^[0-9]*$")),
    category: new FormControl('', Validators.required)
  });

  constructor() {
    // Activer/désactiver Surface Terrace en fonction de Terrace
    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.enable();
      } else {
        this.apartForm.get('surfaceterrace')?.disable();
        this.apartForm.get('surfaceterrace')?.setValue('');
      }
    });
  }
  onSubmit() {
    if (this.apartForm.valid) {
      const newApartment: Apartment = {
        ResidenceId: Number(this.apartForm.value.ResidenceId),
        apartNum: Number(this.apartForm.value.apartNum),
        floorNum: Number(this.apartForm.value.floorNum),
        surface: this.apartForm.value.surfaceterrace ? Number(this.apartForm.value.surfaceterrace) : 0,
        surfaceterrace: this.apartForm.value.terrace ? Number(this.apartForm.value.surfaceterrace) : 0,
        terrace: !!this.apartForm.value.terrace,  
        category: this.apartForm.value.category ?? "Non spécifié" 
      };

      this.apartments.push(newApartment);
      this.newApart = newApartment;
      console.log('Nouvel appartement ajouté:', this.newApart);
      console.log("Nouvel appartement ajouté :", newApartment);
      this.apartForm.reset();
    }
    
  }
 
}
