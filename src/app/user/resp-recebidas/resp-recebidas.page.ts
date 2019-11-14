import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Enviar } from 'src/app/user/entidade/enviar';
import { Gambi } from 'src/app/user/gambiarra/gambi';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';



@Component({
  selector: 'app-resp-recebidas',
  templateUrl: './resp-recebidas.page.html',
  styleUrls: ['./resp-recebidas.page.scss'],
})
export class RespRecebidasPage implements OnInit {
  listaEnviar: Observable<Enviar[]>;
  listaGambi: Observable<Gambi[]>;
  constructor(private fire: AngularFireDatabase, private router: Router, ) {      

        this.listaEnviar = this.fire.list<Enviar>('enviosAdm', ref =>
          ref.orderByChild('cpfDest').equalTo('10650701950')).snapshotChanges().pipe(

            map(lista => lista.map(linha => ({
              key: linha.payload.key, ...
                linha.payload.val()
            }))));



  }
  ngOnInit() {
  }

}
