import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
// import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeUserComponent } from './utilisateur/liste-user/liste-user.component';
import { AddUserComponent } from './utilisateur/add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';

import { AjoutVaccinComponent } from './vaccin/ajout-vaccin/ajout-vaccin.component';
import { ListeVaccinComponent } from './vaccin/liste-vaccin/liste-vaccin.component';
import { ListeMaladieComponent } from './vaccin/liste-maladie/liste-maladie.component';
import { AjoutMaladieComponent } from './vaccin/ajout-maladie/ajout-maladie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { AjoutCarnetComponent } from './parent/ajout-carnet/ajout-carnet.component';
import { ListerCarnetComponent } from './parent/lister-carnet/lister-carnet.component';
// import { NotificationComponent } from './notification/notification.component';


const routes:Routes=[
  {path:"menu",component:MenuComponent},

  {path:"utilisateurListe",component:ListeUserComponent},
  {path:"utilisateurAdd",component:AddUserComponent},
  {path: "actualiser",component: ListeUserComponent},

  {path: "vaccinListe",component: ListeVaccinComponent},
  {path: "vaccinAjout",component: AjoutVaccinComponent},

  {path: "maladieListe",component: ListeMaladieComponent},
  {path: "actualiser",component: ListeMaladieComponent},
  {path: "maladieAjout",component: AjoutMaladieComponent},


  {path:"login",component:LoginComponent},

  {path:"parent",component:ParentComponent},
  {path:"listerCarnet",component:ListerCarnetComponent},
  {path:"AjoutCarnet",component:AjoutCarnetComponent},

  {path:"infirmier",component:InfirmierComponent},





];


@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    ListeUserComponent,
    AddUserComponent,

    AjoutVaccinComponent,
    ListeVaccinComponent,

    ListeMaladieComponent,
    AjoutMaladieComponent,
    LoginComponent,
    ParentComponent,
    InfirmierComponent,
    AjoutCarnetComponent,
    ListerCarnetComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
