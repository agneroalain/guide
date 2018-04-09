import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GuidePage } from '../pages/guide/guide';
import { ParamTresPage } from '../pages/param-tres/param-tres';
import { CloudPage } from '../pages/cloud/cloud';
import { ConnexionPage } from '../pages/connexion/connexion';
import { SignupPage } from '../pages/signup/signup';
import { SommairePage } from '../pages/sommaire/sommaire';
import { AidesPage } from '../pages/aides/aides';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GuidePage,
    ParamTresPage,
    CloudPage,
    ConnexionPage,
    SignupPage,
    SommairePage,
    AidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuidePage,
    ParamTresPage,
    CloudPage,
    ConnexionPage,
    SignupPage,
    SommairePage,
    AidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}