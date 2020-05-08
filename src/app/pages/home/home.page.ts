import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public loadingCntrl: LoadingController,
    private navCtrl: NavController,
    private alertService: AlertService) {
  
  }

  ngOnInit() {
  }

  logOut(){
    this.alertService.showLogOutAlert();
  }  
}
