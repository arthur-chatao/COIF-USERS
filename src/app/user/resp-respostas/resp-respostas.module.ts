import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespRespostasPageRoutingModule } from './resp-respostas-routing.module';

import { RespRespostasPage } from './resp-respostas.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RespRespostasPageRoutingModule
  ],
  declarations: [RespRespostasPage]
})
export class RespRespostasPageModule {}
