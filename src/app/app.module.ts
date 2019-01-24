import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrderProvider } from '../providers/order/order';
import { OrderPage } from '../pages/order/order';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { RegisterOrderPage } from '../pages/register-order/register-order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    OrderDetailPage,
    RegisterOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OrderDetailPage,
    RegisterOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrderProvider,
    SQLite
  ]
})
export class AppModule {}
