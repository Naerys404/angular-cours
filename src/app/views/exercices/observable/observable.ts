import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class ObservableGenerator {
  numbers: number[] = [];
  private sub: Subscription | null = null;
  paused = false;
  checked = false;

  start(): void {
    console.log('Démarrage du générateur');
    const randomNumbers$: Observable<number> = interval(1000);

    //On s'abonne
    if (!this.sub) {
      this.sub = randomNumbers$.subscribe(() => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        console.log('nombre généré :', randomNum);
        this.numbers.push(randomNum);
      });
      console.log('Abonnement effectué.');
    }
  }

  pause(): void {
    this.paused = !this.paused;
    console.log(this.paused ? 'Générateur en pause' : 'Générateur relancé');

    if (this.paused) {
      this.stopWithoutReset();
    } else {
      this.start();
    }
  }

  stop(): void {
    this.stopWithoutReset();
    this.numbers = [];
  }

  stopWithoutReset() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
      console.log('Abonnement annulé');
    } else {
      return;
    }
  }

  togglePairDisplay() {
    this.checked = !this.checked;
    if (this.checked) {
      this.numbers = this.numbers.filter((num) => num % 2 === 0);
    }
  }
}
