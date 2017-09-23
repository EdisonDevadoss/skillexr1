import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-index',
  templateUrl: 'skillexr-index.html',
})
export class SkillexrIndexPage {

  //scroll: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // for(let i =0; i< 6; i++ ){
    //   this.scroll.push(i);
    // }
  }
  Signin(){
    this.navCtrl.push('SkillexSigninPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrIndexPage');
  }

}
