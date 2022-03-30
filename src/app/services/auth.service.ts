import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth ) { }

  // Registro con correo
  signUpWithEmail(email: any, pass: any): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, pass);
  }

  // Ingreso con email
  signInWithEmail(email: any, pass: any): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  // Finalizar sesión
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

}
