import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  task = '';

  onAddTask() {
    this.tasks.push(this.task);
    this.task = '';
  }

  onDeleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
