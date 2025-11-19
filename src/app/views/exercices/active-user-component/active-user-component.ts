import { Component, Input } from '@angular/core';
import { PersonSimplified } from '../../../models/personSimplified';

@Component({
  selector: 'app-active-user-component',
  imports: [],
  templateUrl: './active-user-component.html',
  styleUrl: './active-user-component.css',
})
export class ActiveUserComponent {

  @Input() name: PersonSimplified['name'] = '';
  @Input() age: PersonSimplified['age'] | null = null;
 

}
