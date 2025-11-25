import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-user-routing',
  imports: [],
  // templateUrl: './one-user-routing.html',
  template:`

<div class="stats shadow w-full max-w-md mx-auto">
  <div class="stat">
    <div class="stat-title">ID Utilisateur</div>
    <div class="stat-value text-primary">{{ user.id }}</div>
    <div class="stat-desc">Identifiant unique</div>
  </div>

  <div class="stat">
    <div class="stat-title">Nom d'utilisateur</div>
    <div class="stat-value text-secondary">{{ user.name }}</div>
    <div class="stat-desc">Nom complet</div>
  </div>
</div>
  `,
  styleUrl: './one-user-routing.css'
})
export class OneUserRouting {
  user: {id: number, name: string} = { id: 0, name: '' };
  paramsSubscription?: Subscription;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    }
    this.paramsSubscription=this.route.params.subscribe((params:Params)=>{
      this.user.id=params['id'];
      this.user.name=params['name'];
    })
  }

  ngOnDestroy(){
    this.paramsSubscription?.unsubscribe();
  }

}
