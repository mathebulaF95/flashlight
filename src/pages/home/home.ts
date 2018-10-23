import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private flashlight: Flashlight) {

  }
  
On(){
  this.flashlight.switchOn();
}

Off(){
  this.flashlight.switchOff();
}
}
