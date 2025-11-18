import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

  color:string = '';

  constructor(){
      let aFriendStatus;
      if(Math.random() > 0.5) {
        aFriendStatus = "ON";
      } else {
        aFriendStatus = "OFF";
      }
      this.color = this.getColor(aFriendStatus);
  }
  

  protected friendList:string[] = [];
  protected listFriendCreated:boolean = false;

  protected friendName = 'Kira'; 

  listFriendsCreationStatus:string="🥶 Aucun ami ..."


  protected addFriend(friendName: string): void{
    this.listFriendsCreationStatus=`🥳 Votre ami a été ajouté ! ( ${this.friendName} )`;
    this.friendList.unshift(friendName);
  }

  protected updateListFriendCreated():void {
    this.listFriendCreated = true;
  }

  protected getColor(status:string): string{
      return status === "ON" ? "green" : "red";
  }

}
