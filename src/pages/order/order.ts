import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderDetailPage } from '../order-detail/order-detail';
import { RegisterOrderPage } from '../register-order/register-order';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openDetailPage() {
    this.navCtrl.push(OrderDetailPage);
  }

  openRegisterOrder() {
    this.navCtrl.push(RegisterOrderPage);
  }
}
