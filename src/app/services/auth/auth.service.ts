import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router
  ) { }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    let session = {
      email: 'john.doe@mail.com'
    }

    return false;
    // return session;
  }

  // Sign in
  async signIn(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign up
  async signUp(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
  }
//   async getSession() {
//     // Utilisez une requête HTTP pour obtenir la session de l'utilisateur depuis Flask
//     return this.http.get<any>('https://votre-backend-url/get_session').toPromise();
//   }

//   async signIn(email: string, password: string) {
//     // Utilisez une requête HTTP pour vous connecter via Flask
//     return this.http.post<any>('https://votre-backend-url/sign_in', { email, password }).toPromise();
//   }

//   async signUp(email: string, password: string) {
//     // Utilisez une requête HTTP pour vous inscrire via Flask
//     return this.http.post<any>('https://votre-backend-url/sign_up', { email, password }).toPromise();
  
// }
}