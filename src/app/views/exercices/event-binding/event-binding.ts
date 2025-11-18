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

  protected friendName = 'Kira'; 

  listFriendsCreationStatus:string="🥶 Aucun ami ..."

  onAddingFriends():void{
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !"
  }

  protected addFriend(friendName: string): void{
    this.listFriendsCreationStatus=`🥳 Votre ami a été ajouté ! ( ${this.friendName} )`;
    this.friendList.push(friendName);
    this.friendName = '';
  }

}
