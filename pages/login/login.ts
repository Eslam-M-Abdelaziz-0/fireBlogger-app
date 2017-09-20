import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	public email: any;
	public pass: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login () {
	  alert(this.email);
  }
  
  goSignup () {
	  //this.navCtrl.push(SignupPage);
	  //let signupModal = this.modalCtrl.create(SignupPage);
	  //signupModal.present();
	  this.modalCtrl.create(SignupPage).present();
  }
  
  goToResetPassword () {
	  this.navCtrl.push(ResetPasswordPage);
  }
}
