import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespRecebidasPage } from './resp-recebidas.page';

const routes: Routes = [
  {
    path: '',
    component: RespRecebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespRecebidasPageRoutingModule {}
