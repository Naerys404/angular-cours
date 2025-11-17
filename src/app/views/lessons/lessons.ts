import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lessons',
  imports: [RouterLink],
  templateUrl: './lessons.html',
  styleUrl: './lessons.css',
})
export class Lessons {
  protected title:string = "Leçons";
}
