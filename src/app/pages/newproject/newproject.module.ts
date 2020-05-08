import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewprojectPageRoutingModule } from './newproject-routing.module';

import { NewprojectPage } from './newproject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewprojectPageRoutingModule
  ],
  declarations: [NewprojectPage]
})
export class NewprojectPageModule {}
