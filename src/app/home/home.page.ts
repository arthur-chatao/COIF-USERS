import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Alunos } from 'src/app/cadastros/entidade/alunos';
import { map } from 'rxjs/operators'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaAlunos: Observable<Alunos[]>;
  cpf: string;
  senha: string;

  constructor(private fire: AngularFireDatabase, private rota: Router, ) {
    this.listaAlunos = this.fire.list<Alunos>('alunos').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  autenticar() {
    this.fire.database.ref('alunos').orderByChild('cpfResp').equalTo(this.cpf).on("value", dadosFire => {
      dadosFire.forEach(dado => {
        if (this.senha == dado.val().senhaResp) {
         this.rota.navigate(['resp-recebidas']);
        } else {
        alert("sai dai");
        }
        })
      });
  }
}
