import { Injectable } from '@angular/core';
import { Database, ref, set, update, push, remove, onValue } from 'firebase/database';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksRef: any;

  constructor(public db: Database) {
    this.tasksRef = ref(this.db, 'tasks');
  }
  
  getTasks(): Observable<Task[]> {
    return new Observable((observer) => {
      onValue(this.tasksRef, (snapshot) => {
        const data = snapshot.val();
        const tasks: Task[] = data ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
        observer.next(tasks);
      });
    });
  }

  // Ajouter une tâche
  async addTask(task: Task): Promise<void> {
    const newTaskRef = push(this.tasksRef);
    await set(newTaskRef, task); // Ajout de la tâche
  }

  // Mettre à jour une tâche
  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('La tâche doit avoir un ID pour être mise à jour.');
    }
    // Une ref pour viser dans la """table"""" des tasks, sur un ID particulier
    const taskRef = ref(this.db, `tasks/${task.id}`);
    await update(taskRef, task); // Mise à jour de la tâche
  }

  // Supprimer une tâche
  async deleteTask(taskId: string): Promise<void> {
    //! On pourra rajouter un if si on a pas d'iD (c'est grave)
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await remove(taskRef); // Suppression de la tâche
  }
}

