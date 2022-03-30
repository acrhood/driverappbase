import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController, ToastController, Platform, ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';
const impresa = environment.impresa;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  // tslint:disable: triple-equals
  email: string;
  pass: string;
  data = {};
  datasesion = {};
  msg: string;
  errsystem = { sel: '', tbl: 80, where: '' };
  @ViewChild('logSectionBtn1', { read: ElementRef, static: false }) private logsectionbtn1: ElementRef;
  @ViewChild('logSectionBtn2', { read: ElementRef, static: false }) private logsectionbtn2: ElementRef;
  @ViewChild('logSectionBtn3', { read: ElementRef, static: false }) private logsectionbtn3: ElementRef;
  @ViewChild('dataLog', { read: ElementRef, static: false }) private datalog: ElementRef;
  @ViewChild('btnLoginMail', { read: ElementRef, static: false }) public btnloginmail: ElementRef;
  @ViewChild('smSocialMediaBtns', { read: ElementRef, static: false }) private smsocialmediabtns: ElementRef;
  @ViewChild('logMsj', { read: ElementRef, static: false }) private logmsj: ElementRef;

  constructor( private authService: AuthService,
               private navCtrl: NavController,
               public platform: Platform,
               private crudService: CrudService,
               public modalCtrl: ModalController,
               private toastCtrl: ToastController ) { }

  ngOnInit() { }

  resetPass( mail: string ) {
    firebase.auth().sendPasswordResetEmail(mail);
  }

  async loginWithEmail() {
    console.log('Login Email');
    // quitar espacios en blanco
    this.authService.signInWithEmail( this.email.replace(/\s+/g, ''), this.pass + '$' )
    .then(res => {
      console.log(res);
      // Verificacion correo
      // if ( res.user.emailVerified ) {
      console.log('signin success');
      console.log(res.user.uid);
      const data = { sel: 'idtipo', tbl: 5, where: 'uid = "' + res.user.uid + '"' };
      this.crudService.crud( data ).subscribe(tipo => {
        console.log(tipo);
        if ( res != null ) {
          if (tipo[0][0][0] == 3) {
            this.navCtrl.navigateBack('/traceroute');
          } else {
            console.log('Este usuario no existe en la aplicación');
          }
        } else {
          this.navCtrl.navigateBack('/signin');
        }
      }, err => {
        console.log(err);
      });
      // this.navCtrl.navigateBack('/tabs/menu');
      // } else {
      //   this.mostrar_error('Debe de verificar el correo');
      // }
    })
    .catch(async error => {
      console.log( JSON.stringify( error ) );
      if ( error.code == 'auth/wrong-password' ) {
        console.log('Contraseña incorrecta');
        this.toastCtrl.create({
          message: 'Contraseña incorrecta'
        })
      } else if ( error.code == 'auth/invalid-email' ) {
        console.log('Correo Inválido');
        this.toastCtrl.create({
          message: 'Correo Inválido'
        })
      } else if ( error.code == 'auth/user-not-found' ) {
        console.log('Datos ingresados inválidos. Favor verificar que la información ingresada es correcta');
        this.toastCtrl.create({
          message: 'Datos ingresados inválidos. Favor verificar que la información ingresada es correcta'
        })
      } else if ( error.code == 'auth/too-many-requests' ) {
        console.log('Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde');
        this.toastCtrl.create({
          message: 'Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde'
        })
      } else {
        this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
        this.crudService.crud(this.errsystem).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
      }
    });
  }

  emailLogin() {
    // this.logsectionbtn1.nativeElement.classList.add('ion-hide');
    // this.logsectionbtn2.nativeElement.classList.add('ion-hide');
    // this.logsectionbtn3.nativeElement.classList.add('ion-hide');
    // this.datalog.nativeElement.classList.remove('ion-hide');
    // this.smsocialmediabtns.nativeElement.classList.remove('ion-hide');
    // this.logmsj.nativeElement.classList.add('ion-hide');
    this.email = '';
    this.pass = '';
  }

  showMediaBtns() {
    // this.logsectionbtn1.nativeElement.classList.remove('ion-hide');
    // this.logsectionbtn2.nativeElement.classList.remove('ion-hide');
    // this.logsectionbtn3.nativeElement.classList.remove('ion-hide');
    // this.datalog.nativeElement.classList.add('ion-hide');
    // this.smsocialmediabtns.nativeElement.classList.add('ion-hide');
    // this.logmsj.nativeElement.classList.remove('ion-hide');
  }

  onEnter() {
    this.loginWithEmail();
  }

}
