import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {Salaire} from "../interface/salaire";

@Injectable({
  providedIn: 'root'
})
export class SalaireService {

  salairesRef: AngularFireList<any>;
  salaireRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  addSalaire(salaire: Salaire) {

    this.salairesRef.push({
      dateSalaire: salaire.dateSalaire,
      montantSalaire: salaire.montantSalaire,
    });

  }

  getSalaire(id: string) {
    this.salaireRef = this.db.object('salaire-list/' + id);

  }

  getSalaireList() {
    this.salairesRef = this.db.list('salaire-list');

  }

  UpdateSalaire(salaire: Salaire) {
    this.salaireRef.update({
      dateSalaire: salaire.dateSalaire,
      montantSalaire: salaire.montantSalaire,
    });

  }

  deleteSalaire() {
    this.salaireRef = this.db.object('salaire-list');
    return this.salaireRef;

  }
}
