import { Component } from '@angular/core';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})

export class PropertyBinding {
   
persons:Person[] = [
  { 
    name: 'Steven Seagal',
    status:false,
    age : 25,
    bio:'Acteur',
    reputation: false,
    image : "https://placehold.co/600x400"
  },
  { name: 'Henri Cavill',
    status:false,
    age : 42,
    bio:'Acteur',
    reputation: true,
    image : "https://placehold.co/600x400"
  }

]
  

 
 
}

