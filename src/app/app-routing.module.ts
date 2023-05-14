import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriePRODUITComponent } from './Les_modules/categorie-produit/categorie-produit.component';
import { CategorieACCUEILComponent } from './Les_modules/categorie-accueil/categorie-accueil.component';
import { CategorieCONTACTComponent } from './Les_modules/categorie-contact/categorie-contact.component';
import { CategorieHOMMEComponent } from './Les_modules/categorie-homme/categorie-homme.component';
import { CategorieFEMMEComponent } from './Les_modules/categorie-femme/categorie-femme.component';
import { CategorieENFANTComponent } from './Les_modules/categorie-enfant/categorie-enfant.component';
import { CategorieAPROPOSComponent } from './Les_modules/categorie-apropos/categorie-apropos.component';
import { CategorieSERVICESComponent } from './Les_modules/categorie-services/categorie-services.component';
import { CategorieUTILISATEURComponent } from './Les_modules/categorie-utilisateur/categorie-utilisateur.component';
import { CategorieINSCRIPTIONComponent } from './Les_modules/categorie-inscription/categorie-inscription.component';
import { CategorieCONNEXIONComponent } from './Les_modules/categorie-connexion/categorie-connexion.component';

const routes: Routes = [
  {
    path : '',
    component : CategorieACCUEILComponent
  },
  {
    path : 'categorie-accueil',
    component : CategorieACCUEILComponent
  },
  {
    path : 'categorie-produit',
    component : CategoriePRODUITComponent
  },
  {
    path : 'categorie-contact',
    component : CategorieCONTACTComponent
  },
  {
    path : 'categorie-homme',
    component : CategorieHOMMEComponent
  },
  {
    path : 'categorie-femme',
    component : CategorieFEMMEComponent
  },
  {
    path : 'categorie-enfant',
    component : CategorieENFANTComponent
  },
   {
    path : 'categorie-apropos',
    component : CategorieAPROPOSComponent
  },
  {
    path : 'categorie-service',
    component : CategorieSERVICESComponent
  },
  {
    path : 'categorie-utilisateur',
    component : CategorieUTILISATEURComponent
  },
  {
    path : 'categorie-inscription',
    component: CategorieINSCRIPTIONComponent
  },
  {
    path : 'categorie-connexion',
    component : CategorieCONNEXIONComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
