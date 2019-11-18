import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespRespostasPage } from './resp-respostas.page';

const routes: Routes = [
  {
    path: '',
    component: RespRespostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespRespostasPageRoutingModule {}
