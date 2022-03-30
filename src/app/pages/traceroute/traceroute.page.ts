import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';

const impresa = environment.impresa;
const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-traceroute',
  templateUrl: './traceroute.page.html',
  styleUrls: ['./traceroute.page.scss'],
})
export class TraceroutePage implements OnInit {
  firestore = firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');
  // tslint:disable: new-parens
  // tslint:disable: triple-equals
  @ViewChild('Map', {static: false}) mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = { lat: null, lng: null};
  markerOptions: any = { position: null, map: null, title: null, animated: null };
  marker: any;
  kms: any;
  directionsService: any = null;
  directionsDisplay: any = null;
  origen = { lat: null, lng: null };
  destino = { lat: null, lng: null };
  waypoints = [];
  bounds: any = null;
  userid: any;
  loadingG: any;
  camera: any;
  markerTrayectory: any;
  stepDisplay: any;
  markerArray = [];

  constructor( private crudService: CrudService,
               private loadingCtrl: LoadingController,
               private fcm: FCM,
               private afd: AngularFireDatabase ) {
                this.directionsService = new google.maps.DirectionsService;
                this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
                this.bounds = new google.maps.LatLngBounds();
              }

  ngOnInit() {
    this.userid = firebase.auth().currentUser.uid;
  }

  ionViewWillEnter() {
    const datos = { sel: '', tbl: 38, where: '"' + this.userid + '"' };
    const ini = document.getElementById('startTravel') as HTMLInputElement;
    const fin = document.getElementById('endTravel') as HTMLInputElement;
    this.crudService.crud( datos ).subscribe(res => {
      if (res[0].length > 0) {
        ini.disabled = false;
        fin.disabled = false;
        this.getGeolocation();
        this.showMap();
      } else {
        const map = document.getElementById('isviaje') as HTMLInputElement;
        map.append('No hay viajes');
        ini.disabled = true;
        fin.disabled = true;
      }
    }, err => {
      console.log(err)
    });
  }

  async getGeolocation() {
    console.log('geolocation');
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.location.lat = coordinates.coords.latitude;
    this.location.lng = coordinates.coords.longitude;
  }

  async showMap() {
    // this.loadingG = await this.loadingCtrl.create({
    //   message: 'Cargando mapa'
    // });
    // await this.loadingG.present();
    const panelEle: HTMLElement = document.getElementById('panel');
    console.log('showMap');
    this.mapOptions = {
      center: this.location,
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.crudService.crud({ sel: '', tbl: 99, where: impresa }).subscribe(origen => {
      this.origen = { lat: parseFloat(origen[0][0][15]), lng: parseFloat(origen[0][0][16]) };
      this.destino = { lat: parseFloat(origen[0][0][15]), lng: parseFloat(origen[0][0][16]) };
    }, err => {
      console.log(err);
    });

    setTimeout(() => {
      console.log( JSON.stringify(this.location) );
      console.log('map');
      this.map = new google.maps.Map( this.mapElement.nativeElement, this.mapOptions );
      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setPanel(panelEle);
      this.calculateAndDisplayRoute();
    }, 3000);
  }

  getWaypoints() {
    this.bounds.extend(this.location);
    console.log('userid');
    console.log(this.userid);
    // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < this.markerArray.length; i++) {
    //   this.markerArray[i].setMap(null);
    // }
    const datos = { sel: '', tbl: 38, where: '"' + this.userid + '"' };
    this.crudService.crud( datos ).subscribe((res: any) => {
      console.log('waypoints db');
      console.log(res);

      if (res[0].length == 0) {
        console.log('no hay viajes');
      } else {
        // marker client
        const shop = new google.maps.Marker({
          position: this.origen,
          map: this.map,
          // icon:
        });
        this.attachInstructionText(shop, res[0][0][7]);
        res[0].forEach((direc: any) => {
          this.waypoints.push({
            location: { lat: parseFloat(direc[1]), lng: parseFloat(direc[2]) },
            stopover: true
          });
          const point = new google.maps.LatLng(parseFloat(direc[1]), parseFloat(direc[2]));
          this.bounds.extend(point);
          this.showSteps(direc);
        });
        // res[0].forEach((direc: any) => {
        //   this.waypoints.push({
        //     location: { lat: parseFloat(direc[1]), lng: parseFloat(direc[2]) },
        //     stopover: true
        //   });
        // });
        // this.waypoints.forEach(waypoint => {
        //   console.log('waypoints');
        //   console.log(waypoint.location.lat);
        //   console.log(waypoint.location.lng);
        //   const point = new google.maps.LatLng(waypoint.location.lat, waypoint.location.lng);
        //   this.bounds.extend(point);
        // });
        // this.showSteps(this.waypoints);
        this.map.fitBounds(this.bounds);
      }
    }, (err: any) => {
      console.log('error direcciones');
      console.log(err);
      this.loadingG.dismiss();
    });
  }

  showSteps(waypoints: any) {
    console.log(waypoints);
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(waypoints[1]), lng: parseFloat(waypoints[2]) },
      map: this.map
    });
    this.attachInstructionText(marker, waypoints[4] + ',\n' + waypoints[5] + ',\n' + waypoints[6]);
    this.markerArray.push(marker);
    // const myRoute = directionResult.routes[0].legs[0];
    // for (let i = 0; i < myRoute.steps.length; i++) {
    //     const marker = new google.maps.Marker({
    //       position: myRoute.steps[i].start_point,
    //       map: this.map
    //     });
    //     this.attachInstructionText(marker, myRoute.steps[i].instructions);
    //     this.markerArray[i] = marker;
    // }
  }

  attachInstructionText(marker: any, text: any) {
    google.maps.event.addListener(marker, 'click', () => {
      this.stepDisplay.setContent(text);
      this.stepDisplay.open(this.map, marker);
    });
  }

  calculateAndDisplayRoute() {
    this.getWaypoints();
    this.stepDisplay = new google.maps.InfoWindow();
    console.log('origen');
    console.log(this.origen);
    console.log('destino');
    console.log(this.destino);
    setTimeout(() => {
      console.log('waypoints');
      console.log(this.waypoints);
      this.directionsService.route({
        origin: this.origen,
        destination: this.destino,
        waypoints: this.waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING',
        avoidTolls: true
      }, (response: any, status: any) => {
        console.log( 'status', status );
        if (status === 'OK') {
          this.kms = response.routes[0].legs[0].distance.text.substr(0, response.routes[0].legs[0].distance.text.indexOf(' '));
          console.log('response');
          console.log( response );
          this.directionsDisplay.setDirections(response);
          // this.showSteps(response);
          // this.loadingG.dismiss();
          // console.log( JSON.stringify(response) );
        } else if (status == 'REQUEST_DENIED') {
          const data = { sel: '', tbl: 80, where: '0,"Error en consulta Google Maps Api","' + this.userid + '","' + status + '",' +
          '"traceroute","calculateAndDisplayRoute",0' };
          this.crudService.crud( data ).subscribe(suc => {
            console.log(suc);
          }, err => {
            console.log(err);
          });
        } else {
          console.log('Directions request failed due to ' + status);
          this.loadingG.dismiss();
        }
      });
    }, 500);
  }

  tokensetup() {
    const promise = new Promise((resolve, reject) => {
      this.fcm.getToken().then(token => {
        console.log(token);
        resolve(token);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
    return promise;
  }

  storeToken(t: any, uid: string, username: string) {
    console.log(t, uid, username);
    this.afd.list(this.firestore).push({
      uid,
      devtoken: t
    }).then(() => {
      console.log('token stored');
    }).catch(() => {
      console.log('token not stored');
    });

    this.afd.list(this.firemsg).push({
      sendername: username,
      message: 'Su pedido va en camino'
    }).then(() => {
      console.log('message stored');
    }).catch(() => {
      console.log('message not stored');
    });
  }

  async start() {
    // disable start button
    const ini = document.getElementById('startTravel') as HTMLInputElement;
    const fin = document.getElementById('endTravel') as HTMLInputElement;
    ini.disabled = true;
    fin.disabled = false;
    // getOrdersbyRoute
    const data = { sel: '', tbl: 108, where: '"' + this.userid + '"' };
    this.crudService.crud(data).subscribe(suc => {
      console.log(suc);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < suc[0].length; i++) {
        console.log(suc[0][i][1]);
        this.tokensetup().then((token) => {
          this.storeToken(token, suc[0][i][1], suc[0][i][2]);
        });
      }
      // this.fcm.onNotification().subscribe(data => {
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //   } else {
      //     console.log('Received in foreground');
      //   }
      // });
    });

    // this.crudService.crud({ sel: '', tbl: 38, where: '"' + this.userid + '"' }).subscribe(orders => {
    //   orders[0].forEach((res: any) => {
    //     // iniciar en DB
    //     console.log('idorden: ' + res[0]);
    //     this.crudService.crud({ sel: '', tbl: 30, where: res[0] + ',3' }).subscribe(update => {
    //       console.log('update');
    //       console.log(update);
    //     });
    //   });
    // });

    // get coords
    // Geolocation.watchPosition({ enableHighAccuracy: true}, (position, err) => {
    //   console.log('watch', position);
    //   // center map
    //   const myOptions = { zoom: 19, center: { lat: position.coords.latitude, lng: position.coords.longitude },
    //   mapTypeId: google.maps.MapTypeId.ROADMAP };
    //   this.map.setOptions(myOptions);
    //   // add marker
    //   if (this.markerTrayectory != null) {
    //     this.markerTrayectory.setMap(null);
    //   }
    //   this.markerTrayectory = new google.maps.Marker({
    //     position: { lat: position.coords.latitude, lng: position.coords.longitude },
    //     draggable: true,
    //     icon: 'https://food.pipecr.com/assets/img/express_.svg',
    //     map: this.map
    //   });
    // });
  }

  end() {
    const fin = document.getElementById('endTravel') as HTMLInputElement;
    fin.disabled = true;
    const data = { sel: '', tbl: 94, where: '8,"' + this.userid + '",' + impresa };
    this.crudService.crud( data ).subscribe(suc => {
      console.log('suc');
      console.log(suc);
    }, err => {
      console.log('err');
      console.log(err);
    });
  }

}
