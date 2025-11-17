import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {

// lienDynamique :string='https://www.google.com'
    // 🟦 Variables pour Property Binding
    imageUrl:string = 'https://placehold.co/300x200?text=Image+Property';
    buttonDisabled:boolean = true;
    inputPlaceholder:string = 'Tapez votre texte ici';

    // 🟧 Variables pour Attribute Binding
    ariaLabel:string = 'Bouton important';
    customAttr:string = 'dynamique';

    // 🟨 Méthodes
    toggleButton() {
      this.buttonDisabled = !this.buttonDisabled;
    }
}
