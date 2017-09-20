import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
///////
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
///////

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
  constructor(public navCtrl: NavController) {
	//////
    //	Initialize Firebase
    var config = {
      apiKey: "AIzaSyAuWLHaRhpIop9EcF8EgfQHVy4rg_yY7Jo",
      authDomain: "fireblogger-a703c.firebaseapp.com",
      databaseURL: "https://fireblogger-a703c.firebaseio.com",
      projectId: "fireblogger-a703c",
      storageBucket: "fireblogger-a703c.appspot.com",
      messagingSenderId: "418916088211"
    };
    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is logout
		navCtrl.push(LoginPage);
        }
    });
  }
  
  goToLogin () {
	  this.navCtrl.push(LoginPage);
  }
  
  
}
