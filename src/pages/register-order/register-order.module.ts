import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterOrderPage } from './register-order';

@NgModule({
  declarations: [
    RegisterOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterOrderPage),
  ],
})
export class RegisterOrderPageModule {}
