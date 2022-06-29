import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddDepenseComponent } from './add-depense/add-depense.component';
import { DetailsDepenseComponent } from './details-depense/details-depense.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AddSalaireComponent } from './add-salaire/add-salaire.component';
import { DetailSalaireComponent } from './detail-salaire/detail-salaire.component';
import { ListSalaireComponent } from './list-salaire/list-salaire.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    AddDepenseComponent,
    DetailsDepenseComponent,
    ListDetailComponent,
    AddSalaireComponent,
    DetailSalaireComponent,
    ListSalaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
