import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public order: OrderProvider) {
    
  }

}
