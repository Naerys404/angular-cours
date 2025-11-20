import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);
  private router : Router = inject(Router);

  constructor() {}

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur connecté:', userCredential);
        //! Redirection vers dashboard ou profil
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur de connexion:', error);
      });
  }
}