import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActiveUserComponent } from '../active-user-component/active-user-component';
import { UserDataComponent } from '../user-data-component/user-data-component';
import { PersonSimplified } from '../../../models/personSimplified';

@Component({
  selector: 'app-communication-component',
  imports: [ActiveUserComponent, UserDataComponent],
  templateUrl: './communication-component.html',
  styleUrl: './communication-component.css',
})
export class CommunicationComponent {

  utilisateur = {
    name: 'Jinx',
    age: 21,
  };
 
  updateUser = (age : PersonSimplified['age'], name: PersonSimplified['name']) =>{
    let newName =  name;
    let newAge = age;
   
    this.utilisateur.name = newName
    this.utilisateur.age = newAge
}


}
