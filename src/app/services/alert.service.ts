import { Injectable } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private toastController: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private accountService: AccountService) { }
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }


  async showLogOutAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Çıkmak istediğinize emin misiniz?',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Log Out',
        handler: () => {
          this.accountService.logOut();
          this.navCtrl.navigateRoot('/app');
        }
      }]
    });
    await alert.present();
  }
}