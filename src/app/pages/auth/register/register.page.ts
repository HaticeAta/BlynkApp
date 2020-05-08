import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  _user: User;
  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    private accountService: AccountService
  ) {
    this._user = new User();
  }

  
  ngOnInit() {

  }

  create(){
    this.accountService.createUser(this._user).subscribe((response) =>{
      this.alertService.presentToast("Acount created..");
      this.accountService.logIn();
      this.navCtrl.navigateRoot('/home');
    })
  }

}
