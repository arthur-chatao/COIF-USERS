import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespRecebidasPageRoutingModule } from './resp-recebidas-routing.module';

import { RespRecebidasPage } from './resp-recebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespRecebidasPageRoutingModule
  ],
  declarations: [RespRecebidasPage]
})
export class RespRecebidasPageModule {}
