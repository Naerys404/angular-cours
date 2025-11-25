import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { NgClass} from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, NgClass],
  // templateUrl: './task-list-firebase.html',
  template: `
    <div class="p-6 mx-auto max-w-xl">
      <h2 class="text-3xl font-bold text-center text-primary mb-6">Liste des tâches</h2>

      <form (ngSubmit)="addTask()" class="flex gap-3 mb-8">
        <input
          [(ngModel)]="newTaskTitle"
          name="taskTitle"
          type="text"
          placeholder="Nouvelle tâche"
          class="input input-bordered w-full"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="space-y-3">
        @for(task of tasks; track task){
        <li class="bg-base-100 shadow-lg p-4 rounded-lg">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <span class="text-lg font-medium grow">
              {{ task.title }}
            </span>
            <!-- <span class="text-lg font-medium grow">
         ID : {{task.id}}
        </span> -->

            <span
              class="badge badge-lg font-semibold"
              [ngClass]="{
                'badge-success': task.status === 'completed',
                'badge-warning': task.status === 'pending'
              }"
            >
              {{ task.status }}
            </span>

            <div class="flex gap-2">
              <button class="btn btn-info btn-sm" (click)="toggleStatus(task)">Statut</button>
              <button class="btn btn-error btn-sm" (click)="deleteTask(task.id!)">Supprimer</button>
            </div>
          </div>
        </li>
        }
      </ul>
      @if(tasks.length === 0) {
      <div class="text-center text-neutral-content opacity-70 mt-8">
        Aucune tâche dans la liste. Ajoutez-en une !
      </div>
      }
    </div>
  `,
  styleUrl: './task-list-firebase.css',
})
export class TaskListFirebase {
  newTaskTitle = '';
  tasks:Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.log(this.loadTasks()); // Charger les tâches au démarrage
  }

  // Charger les tâches depuis Firebase
  async loadTasks() {
    try { 
      return this.taskService.getTasks();
      
    } catch (error) {
      return Error('Erreur lors de la récupération des tâches')
    }
  }

  // Ajouter une nouvelle tâche
  async addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        title: this.newTaskTitle.trim(),
        status: 'pending',
      };
      try {
        await this.taskService.addTask(newTask);
        this.newTaskTitle = ''; // Réinitialiser le champ
        await this.loadTasks(); // Recharger les tâches
      } catch (error) {
        console.error('Erreur lors de l’ajout de la tâche :', error);
      }
    }
  }

  // Supprimer une tâche
  async deleteTask(taskId: string) {
    try {
      await this.taskService.deleteTask(taskId);
      await this.loadTasks(); // Recharger les tâches après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }

  // Changer le statut d'une tâche
  async toggleStatus(task: Task) {
    const updatedTask: Task = {
      ...task,
      status: task.status === 'pending' ? 'completed' : 'pending',
    };
    try {
      await this.taskService.updateTask(updatedTask);
      await this.loadTasks(); // Recharger les tâches après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut de la tâche :', error);
    }
  }
}
