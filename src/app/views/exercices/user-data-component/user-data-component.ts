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

@Input() name : PersonSimplified['name'] = '';
@Input() age : PersonSimplified['age'] = 0;

@Output() submitData = new EventEmitter<PersonSimplified>();

submit() {
  this.submitData.emit({age: this.age, name: this.name});
}

}
