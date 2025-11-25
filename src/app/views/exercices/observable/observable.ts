import { Component } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-observables-advanced',
  imports: [NgFor, NgClass, FormsModule],
  templateUrl: './observable.html',
  styleUrl: './observable.css'
})
export class ObservablesAdvanced {
  numbers: { value: number; label: string }[] = []; // Liste des nombres affichés
  private subscription: Subscription | null = null; // Abonnement à l'observable
  filterEven = true; // Filtrer les nombres pairs ou non
  paused = false; // État de la pause

  start(): void {
    console.log('Démarrage du générateur de nombres aléatoires.');

    const randomNumbers$: Observable<number> = interval(1000);

    if (!this.subscription) {
      this.subscription = randomNumbers$.subscribe(() => {
        const randomValue = Math.floor(Math.random() * 100) + 1; // Générer un nombre aléatoire entre 1 et 100

        // Appliquer le filtre (manuellement, pas via `filter` pipe)
        if (this.filterEven && randomValue % 2 !== 0) {
          console.log(`Filtrage : ${randomValue} exclu car impair.`);
          return;
        }
        //le newNumber on fait un objet pour gérer l étiquertte aussi
        const newNumber = {
          value: randomValue,
          label: randomValue > 50 ? 'Élevé' : 'Faible' // Ajouter une étiquette
        };

        console.log(`Nombre reçu : ${newNumber.value}, label : ${newNumber.label}`);

        // Ajouter le nouveau nombre à la liste (gestion de la taille de la liste)
        if (this.numbers.length >= 10) {
          this.numbers.shift(); // Supprimer l'élément le plus ancien si la liste dépasse 10
        }
        this.numbers.push(newNumber); // Ajouter le nouveau nombre
        console.log('Liste mise à jour :', this.numbers);
      });
      console.log('Abonnement effectué.');
    }
  }

  pauseResume(): void {
    this.paused = !this.paused; // Inverser l'état de la pause
    console.log(this.paused ? 'Générateur mis en pause.' : 'Générateur repris.');

    if (this.paused) {
      // Si on met en pause, on désabonne pour arrêter l'émission des nombres
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
    } else {
      // Si on reprend, on redémarre l'abonnement si nécessaire
      if (!this.subscription) {
        this.start();
      }
    }
  }

  stop(): void {
    console.log('Arrêt du générateur de nombres aléatoires.');
    // Désabonner l'observable
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      console.log('Abonnement annulé.');
      this.numbers = []; // Réinitialiser la liste

    } else {
      console.log('Aucun abonnement actif à annuler.');
    }
  }

}
