import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controller } from 'sequelite'
import { Order } from '../../models/order.model';

@Injectable()
export class OrderProvider extends Controller {

  constructor(
    public http: HttpClient
    ) {
    super(Order)
  }


}
