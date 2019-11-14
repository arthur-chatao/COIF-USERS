import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Alunos } from 'src/app/cadastros/entidade/alunos';
import { Gambi } from 'src/app/user/gambiarra/gambi';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaAlunos: Observable<Alunos[]>;
  gammbi: Gambi = new Gambi();


  constructor(private fire: AngularFireDatabase,private rota: Router,) {
    this.listaAlunos = this.fire.list<Alunos>('alunos').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

logar(){
  this.fire.list('gammbi').push(this.gammbi);
  this.gammbi = new Gambi();
  this.rota.navigate(['resp-recebidas']);
}

}
