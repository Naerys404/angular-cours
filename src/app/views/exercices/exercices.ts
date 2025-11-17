import { Component } from '@angular/core';
import  { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exercices',
  imports: [RouterLink],
  templateUrl: './exercices.html',
  styleUrl: './exercices.css',
})
export class Exercices {
  protected title:string = "Exercices";
}
