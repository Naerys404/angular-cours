import { Component } from '@angular/core';
import { ChildComponent } from '../child.component/child.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule,NgIf],
  // templateUrl: './parent.component.html',
  template: `
    <div class="container my-5 p-5 bg-warning-subtle">
      <h2 class="text-center text-primary">Parent Component</h2>
            <!-- Message reçu de l'enfant -->
            <div *ngIf="childNotification" class="alert alert-warning mt-3">
        <strong>Notification from Child:</strong> {{ childNotification }}
      </div>

      <!-- Formulaire pour modifier le message -->
      <div class="mb-3">
        <label for="messageInput" class="form-label">Message to Child:</label>
        <input [(ngModel)]="parentMessage" id="messageInput" class="form-control" placeholder="Enter a message" />
      </div>

      <!-- Contrôle du compteur -->
      <div class="mb-3">
        <label class="form-label">Counter Value:</label>
        <button class="btn btn-danger me-2" (click)="decreaseCounter()">-</button>
        <span class="badge bg-secondary">{{ counterParent }}</span>
        <button class="btn btn-success ms-2" (click)="increaseCounter()">+</button>
      </div>

      <!-- Inclusion du composant enfant -->
       <!-- <img [src]="uneVaraibble " alt=""> -->

      <app-child
        [message]="'tototo'"
        [counter]="1"
        (notify)="handleNotification($event)"
      ></app-child>
    </div>
  `,
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage: string = 'Ici le parent balance des infos intra ENFANT';
  counterParent: number = 0;
  childNotification: string | null = null;


  increaseCounter() {
    this.counterParent++;
  }

  decreaseCounter() {
    if (this.counterParent > 0) {
      this.counterParent--;
    }
  }

  //! Reaction dans le parent à la notification de l'enfant (l'event custom)
  handleNotification(message: string) {
    console.log(message);
    this.childNotification = message;
  }
}
