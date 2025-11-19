import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-tp-giga-bind',
  imports: [FormsModule],
  templateUrl: './tp-giga-bind.html',
  styleUrl: './tp-giga-bind.css',
})
export class TpGigaBind {

  buttonAction:string = "";

  constructor(){
    this.buttonAction = 'Afficher les détails';
  }

  collapsed:boolean = true;
  
  
  arrayCount: number[] = [];
  count = 0;

  toggleP(){
    this.collapsed = !this.collapsed;
    this.count++;
    this.arrayCount.push(this.count);
    this.buttonAction = this.collapsed ? 'Afficher les détails': 'Masquer les détails';
  }


}
