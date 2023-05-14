import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieHOMMEComponent } from './Les_modules/categorie-homme/categorie-homme.component';
import { CategorieFEMMEComponent } from './Les_modules/categorie-femme/categorie-femme.component';
import { CategorieENFANTComponent } from './Les_modules/categorie-enfant/categorie-enfant.component';
import { CategoriePRODUITComponent } from './Les_modules/categorie-produit/categorie-produit.component';
import { CategorieUTILISATEURComponent } from './Les_modules/categorie-utilisateur/categorie-utilisateur.component';
import { CategorieCONNEXIONComponent } from './Les_modules/categorie-connexion/categorie-connexion.component';
import { CategorieINSCRIPTIONComponent } from './Les_modules/categorie-inscription/categorie-inscription.component';
import { CategorieCONTACTComponent } from './Les_modules/categorie-contact/categorie-contact.component';
import { CategorieSERVICESComponent } from './Les_modules/categorie-services/categorie-services.component';
import { CategorieAPROPOSComponent } from './Les_modules/categorie-apropos/categorie-apropos.component';
import { CategorieACCUEILComponent } from './Les_modules/categorie-accueil/categorie-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CategorieHOMMEComponent,
    CategorieFEMMEComponent,
    CategorieENFANTComponent,
    CategoriePRODUITComponent,
    CategorieUTILISATEURComponent,
    CategorieCONNEXIONComponent,
    CategorieINSCRIPTIONComponent,
    CategorieCONTACTComponent,
    CategorieSERVICESComponent,
    CategorieAPROPOSComponent,
    CategorieACCUEILComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
