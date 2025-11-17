import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})



export class PropertyBinding {
   
persons = [
  { 
    name: 'Steven Seagal',
    status:false,
    age : 25,
    bio:'Acteur',
    reputation: false,
  },
  { name: 'Henri Cavill',
    status:false,
    age : 42,
    bio:'Acteur',
    reputation: true,
  }

]
  

 
 
}

