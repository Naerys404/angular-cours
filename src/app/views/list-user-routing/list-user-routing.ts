import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OneUserRouting } from '../one-user-routing/one-user-routing';
@Component({
  selector: 'app-list-user-routing',
  imports: [RouterLink,NgFor],
  templateUrl: './list-user-routing.html',
  styleUrl: './list-user-routing.css'
})
export class ListUserRouting {
  users = [
    {
      id: 1,
      name: 'DarkSasuke42'
    },
    {
      id: 2,
      name: 'Sarah19'
    },
    {
      id: 3,
      name: 'Dr.GyroCortex'
    }
  ];
}
