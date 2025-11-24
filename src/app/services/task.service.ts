import { Injectable } from '@angular/core';
import { Database, ref, set, update, push, remove, onValue } from 'firebase/database';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksRef: any;

  constructor(private db: Database) {
    this.tasksRef = ref(this.db, 'tasks');
    onValue(this.tasksRef, (snapshot) => {
      // .val pour récuperer toutes les données de la base dans tasks
      const data = snapshot.val();
      // console.log(data);
      // On récupère le méga objet tasks de la base mais on en fait un tableau d'objet de tasks
      this.tasksRef = data ? Object.values(data) : [];
    });
  }

  getTasks(): Observable<Task[]> {
    console.log('taskref service', this.tasksRef);
    return this.tasksRef;
  }

  addTask(task: Task) {
    if (task.title.trim()) {
      // On vise les tasks dans notre BDD
      const newTaskRef = push(this.tasksRef);
      set(newTaskRef, task); // Enregistrer l'objet newTask
    }
  }

  deleteTask(task: Task) {
    const tasksRef = ref(this.db, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();

      for (const key in data) {
        if(data[key] == task){
          remove(data[key]);
        }
      }
    });
  }

  changeStatus(task: Task) {
    const tasksRef = ref(this.db, 'tasks');

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();

      for (const key in data) {
        if (data[key] === task) {
          if (data[key].status === 'pending') {
            update(data[key].status, data[key]['complete']);
          } else {
            update(data[key].status, data[key]['pending']);
          }
        }
      }
    });
  }
}
