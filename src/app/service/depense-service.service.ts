import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {Depenses} from "../interface/depenses";
import {Salaire} from "../interface/salaire";

@Injectable({
  providedIn: 'root'
})
export class DepenseServiceService {

  depensesRef: AngularFireList<any>;
  depenseRef: AngularFireObject<any>;


  constructor(private db: AngularFireDatabase) { }

  AddDepenses(depense: Depenses) {
    this.depensesRef.push({
      categories: depense.categories,
      depense: depense.depense,
      dateDepense: depense.dateDepense,
    });
  }

  getDepense(id: string) {

    this.depenseRef = this.db.object('depenses-list/' + id);
    return this.depenseRef;

  }


  getDepenseList() {

    this.depensesRef = this.db.list('depenses-list');
    return this.depenseRef;

  }

  UpdateDepense(depense: Depenses) {

    this.depenseRef.update({
      categories: depense.categories,
      depense: depense.depense,
      dateDepense: depense.dateDepense,
    });

  }

  deleteDepense(id: string) {

    this.depenseRef = this.db.object('depenses-list' + id);
    return this.depenseRef;
  }

}
