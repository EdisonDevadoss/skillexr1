import { Component } from '@angular/core';
import { Platform, LoadingController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage: string = 'SkillexrIndexPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       statusBar.styleDefault();
      //splashScreen.hide();
      
    //  let loading = loadingCtrl.create({
    //     spinner: 'bubbles',
    //     duration: 5000,
    //   });
    //   loading.present();
    let splash = modalCtrl.create("SplashPage");
    splash.present();
    });
  }
}

