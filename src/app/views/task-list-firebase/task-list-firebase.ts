import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule],
  // templateUrl: './task-list-firebase.html',
  template: `
    <div class="container mt-5">
      <h2 class="text-xl font-bold mb-5">Liste des tâches</h2>
      <form (ngSubmit)="addTask(newTask)" class="d-flex mb-3">
        <input
          [(ngModel)]="newTask.title"
          name="task"
          type="text"
          placeholder="Nouvelle tâche"
          class="input me-2"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="list w-full bg-base-100 rounded-box shadow-md">
        @for(task of tasks(); track task.title){
        <li class="list-row flex justify-between items-center">
          <span class="font-bold">{{ task.title }}</span>
          <button (click)="changeStatus(task)" type="button" class="btn btn-success">
            Changer le status
          </button>
          <p class="badge">{{ task.status }}</p>
          <button (click)="deleteTask(task)" type="button" class="btn btn-error">
            Supprimer
          </button>
        </li>
        }
      </ul>
    </div>
  `,
})
export class TaskListFirebase {
  
  newTask:Task = { title: '', status: 'pending' }; // Tâche à ajouter
 
  taskService = inject(TaskService);

  tasks = this.taskService.getTasks();
  

  constructor() {}

  addTask(task:Task){
    this.taskService.addTask(task)
    this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
  }
  changeStatus(task:Task){
    this.taskService.changeStatus(task);
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task);
  }
  
}
