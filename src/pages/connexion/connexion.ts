import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuidePage } from '../guide/guide';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {

  constructor(public navCtrl: NavController) {
  }
  goToGuide(params){
    if (!params) params = {};
    this.navCtrl.push(GuidePage);
  }
}
