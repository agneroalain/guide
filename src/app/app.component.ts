import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudPage } from '../pages/cloud/cloud';
import { SommairePage } from '../pages/sommaire/sommaire';
import { AidesPage } from '../pages/aides/aides';


import { GuidePage } from '../pages/guide/guide';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = GuidePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToGuide(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GuidePage);
  }goToCloud(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CloudPage);
  }goToSommaire(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SommairePage);
  }goToAides(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AidesPage);
  }
}
