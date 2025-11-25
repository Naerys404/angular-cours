import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-signal',
  imports: [FormsModule],
  templateUrl: './task-signal.html',
  styleUrl: './task-signal.css'
})
export class TaskSignal {

taskList:Task[] = [];

taskTitle:Task['title'] = '';
taskPriority:Task['priority'] = 'moyenne';

addTask(){
  let task:Task = {title:this.taskTitle, priority: this.taskPriority, complete:false};
  this.taskList.push(task);
  console.log(this.taskList)
};

completeTask(task:Task){
  task.complete = true;
}

deleteTask(task:Task){
  
}

}

export interface Task {
  title: string;
  priority: 'haute' | 'moyenne' | 'basse';
  complete: boolean;
}
