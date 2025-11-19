import { Component } from '@angular/core';
import { NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-one-friend-dynamic-styling',
  imports: [NgStyle,NgClass],
  templateUrl: './one-friend-dynamic-styling.component.html',
  styleUrl: './one-friend-dynamic-styling.component.css'
})
export class OneFriendDynamicStylingComponent {

  oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";
  oneFriendStyle:string='OFF';

  constructor() {
    this.oneFriendStyle = Math.random()>0.5?'ON':'OFF';
  }


  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }
  getColor():string{
    return this.oneFriendStyle === 'ON' ? 'lightseagreen' : 'orangered'
  }
}
