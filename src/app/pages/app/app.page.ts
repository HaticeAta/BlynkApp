import { Component, OnInit } from '@angular/core';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { ModalController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private navCtrl: NavController,
  ) { 
  
  }
  
  ngOnInit() {
  }
  
  register() {
    this.navCtrl.navigateForward('/register');
  }
  
  login() {
    this.navCtrl.navigateForward('/login');
  }
}
