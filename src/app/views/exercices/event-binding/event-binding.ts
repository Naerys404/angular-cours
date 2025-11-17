import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  protected friendList:string[] = [];

  protected friendName = ''; 

  protected addFriend(){
    this.friendList.push(this.friendName);
    this.friendName = '';
  }

}
