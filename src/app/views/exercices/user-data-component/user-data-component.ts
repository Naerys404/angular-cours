import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonSimplified } from '../../../models/personSimplified';

@Component({
  selector: 'app-user-data-component',
  imports: [],
  templateUrl: './user-data-component.html',
  styleUrl: './user-data-component.css',
})
export class UserDataComponent {

@Output() submitData = new EventEmitter<PersonSimplified>();

submit() {
  this.submitData.emit();
}

}
