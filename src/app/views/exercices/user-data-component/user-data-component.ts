import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonSimplified } from '../../../models/personSimplified';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data-component',
  imports: [FormsModule],
  templateUrl: './user-data-component.html',
  styleUrl: './user-data-component.css',
})
export class UserDataComponent {
name : PersonSimplified['name'] = '';
age : PersonSimplified['age'] = 0;

@Output() submitData = new EventEmitter<PersonSimplified>();

submit() {
  this.submitData.emit({name: this.name, age: this.age});
}

}
