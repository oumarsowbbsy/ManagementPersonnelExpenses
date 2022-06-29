import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListDetailComponent} from "./list-detail/list-detail.component";
import {DetailsDepenseComponent} from "./details-depense/details-depense.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AddDepenseComponent} from "./add-depense/add-depense.component";
import {ListSalaireComponent} from "./list-salaire/list-salaire.component";
import {DetailSalaireComponent} from "./detail-salaire/detail-salaire.component";
import {AddSalaireComponent} from "./add-salaire/add-salaire.component";

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list-detail', component: ListDetailComponent },
  { path: 'details-depense', component: DetailsDepenseComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-depense', component: AddDepenseComponent },
  { path: 'list-salaire', component: ListSalaireComponent },
  { path: 'detail-salaire', component: DetailSalaireComponent },
  { path: 'add-salaire', component: AddSalaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
