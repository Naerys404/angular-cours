import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule],
  // templateUrl: './task-list-firebase.html',
  template: `
    <div class="container mt-5">

      <h2 class="text-xl font-bold mb-5">Liste des tâches</h2>
      <form (ngSubmit)="addTask()" class="d-flex mb-3">
        <input
          [(ngModel)]="newTask.title"
          name="task"
          type="text"
          placeholder="Nouvelle tâche"
          class="input me-2"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="list w-1/2 bg-base-100 rounded-box shadow-md">
        @for(task of tasks; track task.title){
           <li class="list-row flex justify-between">
            <span class="font-bold">{{ task.title }}</span> Status  :<span> {{task.status}}</span>
            <button (click)="deleteTask(task.title)" type="button" class="btn btn-error">Supprimer</button>
          </li>
        }
      </ul>
    </div>
  ` ,
})
export class TaskListFirebase {
  tasks: { title: string; status: string }[] = []; // Liste des tâches
  newTask = { title: '', status: 'pending' }; // Tâche à ajouter

  constructor(private db:Database){
    const tasksRef = ref(this.db, 'tasks');
    // Récupération en temps réel des tâches ( snapshot : quel lorsqu'il y a un changement)
    onValue(tasksRef, (snapshot) => {
      // .val pour récuperer toutes les données de la base dans tasks
      const data = snapshot.val();
      console.log(data);
      // console.log(data);
      // On récupère le méga objet tasks de la base mais on en fait un tableau d'objet de tasks
      this.tasks = data ? Object.values(data) : [];
      console.log(this.tasks);
    });
  }


  addTask() {
    if (this.newTask.title.trim()) {
      // On vise les tasks dans notre BDD
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }

  deleteTask(taskTitle:string){
    const tasksRef = ref(this.db, 'tasks');

    onValue(tasksRef, (snapshot)=> {
      const data = snapshot.val();

      for (const key in data) {
        if (data[key].title === taskTitle){

        }
      }
    })


  }

}
