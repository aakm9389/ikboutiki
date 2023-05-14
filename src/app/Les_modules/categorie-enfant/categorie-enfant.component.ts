import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-enfant',
  templateUrl: './categorie-enfant.component.html',
  styleUrls: ['./categorie-enfant.component.css']
})
export class CategorieENFANTComponent {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'T-shirt',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'../../../assets/img-enfant/e6.png'
    },
    {marque: 'Costume',
    description:'La qualité fait la différence',
    prix:'20.000F',
    img:'../../../assets/img-enfant/e9.png'
    },
    {marque: 'Lacoste',
    description:'La qualité pure',
    prix:'15.000F',
    img:'../../../assets/img-enfant/e2.png'
    },
    {marque: 'Robe',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'../../../assets/img-enfant/e4.png'
    },
    {marque: 'Wax ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'../../../assets/img-enfant/e8.png'
    },
    {marque: 'Wax',
    description:'Confortable pour vos filles',
    prix:'15.000F',
    img:'../../../assets/img-enfant/e7.png'
    },
    {marque: 'Maillot',
    description:'Être classe est un choix',
    prix:'5.000F',
    img:'../../../assets/img-enfant/e3.png'
    },
    {marque: 'Modèle wax',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'../../../assets/img-enfant/e5.png'
    }
  ] ;
Images: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
  onDetail(produit: any){
    this.Images= produit.img
    this.Descrip= produit.description
    this.Prixx= produit.prix
    this.Mark= produit.marque
this.vue=true

  }
  OnRetour(){
    if(this.Images){
      this.Images=''
      this.vue=false
    }
  }
}
