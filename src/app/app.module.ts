import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
// import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeUserComponent } from './utilisateur/liste-user/liste-user.component';
import { AddUserComponent } from './utilisateur/add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';
const routes:Routes=[
  {path:"menu",component:MenuComponent},
  {path:"utilisateurListe",component:ListeUserComponent},
  {path:"utilisateurAdd",component:AddUserComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeUserComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
