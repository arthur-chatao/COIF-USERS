import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/app/entidadeC/curso';
import  { Renv } from "src/app/resp-env/renv";

@Component({
  selector: 'app-resp-respostas',
  templateUrl: './resp-respostas.page.html',
  styleUrls: ['./resp-respostas.page.scss'],
})
export class RespRespostasPage implements OnInit {

  respostasUsers: Renv = new Renv();

  listaCurso: Observable<Curso[]>;


  constructor(private banco: AngularFireDatabase, private rota: Router, public alertController: AlertController ) {
    this.listaCurso = this.banco.list<Curso>('curso').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }


  ngOnInit() {
  }

  env(){
    this.banco.list('respostasUsers').push(this.respostasUsers);
    this.respostasUsers = new Renv();
    this.rota.navigate(['resp-recebidas']);
  }
}
