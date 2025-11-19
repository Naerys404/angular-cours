import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-binding',
  imports: [FormsModule],
  templateUrl: './tp-binding.component.html'
})
export class TpBindingComponent {

  userName: string = 'Eric "Badlands" Booker';

  resetUsername():void {
    this.userName = '';
  }
}
