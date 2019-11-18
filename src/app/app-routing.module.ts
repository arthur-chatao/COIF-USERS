import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'resp-recebidas',
    loadChildren: () => import('./user/resp-recebidas/resp-recebidas.module').then( m => m.RespRecebidasPageModule)
  },  {
    path: 'resp-respostas',
    loadChildren: () => import('./user/resp-respostas/resp-respostas.module').then( m => m.RespRespostasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
