import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../../models/user'
import { AccountService } from 'src/app/services/account.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  _user: User;
  constructor(
    private accountService: AccountService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this._user = new User();
  }

  ngOnInit() { }

  check_user: User[]

  Login() {
    this.accountService.getUser(this._user).subscribe(data => {
      this.check_user = data;
      if (this.check_user.length == 0) {
        this.alertService.presentToast("Kullanıcı bulunamadi");
      } else {
        this.accountService.logIn();
        this.navCtrl.navigateRoot('/home');
      
      }
    })
  }

}
