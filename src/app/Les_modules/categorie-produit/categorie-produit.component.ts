import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.css']
})
export class CategoriePRODUITComponent {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   isChecked = false;

   toggleCheckbox() {
     this.isChecked = !this.isChecked;
   }

   HommeHabit =[
    {marque: 'T-shirt',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/tee-shirt.png'
    },
    {marque: 'Jean',
    description:'La qualité fait la différence',
    prix:'20.000F',
    img:'../../../assets/imgg/produit/jean1.png'
    },
    {marque: 'Jeans',
    description:'large sélection de jeans',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/jean2.png'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'5.000F',
    img:'../../../assets/imgg/produit/lunette.png'
    },
    {marque: 'Chaussures',
    description:'La qualité pure',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/chaussure1.png'
    },
    {marque: 'Robe',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'../../../assets/imgg/produit/robe1.png'
    },
    {marque: 'Collier ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'../../../assets/imgg/produit/collier1.png'
    },
    {marque: 'talon',
    description:'Confortable pour vos filles',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/talon1.png'
    },
   
    {marque: 'Robe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/robe2.png'
    },
    {marque: 'Sac à main ',
    description:'Souplesse pure',
    prix:'7.000F',
    img:'../../../assets/imgg/produit/sac1.png'
    },
    {marque: 'T-shirt',
    description:'Confortable-Durable',
    prix:'5.000F',
    img:'../../../assets/imgg/produit/tee-shirt2.png'
    },
    {marque: 'Habit-bb',
    description:'Elégance pure',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/bebe.png'
    },
    {marque: 'Chemise-Oversize',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/chemise1.png'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'../../../assets/imgg/produit/bazin.png'
    }
  ] ;
  Plus=[
    
    {marque: 'Jordan',
    description:'Elégance pure',
    prix:'25.000F',
    img:'../../../assets/imgg/produit/basket3.png'
    },
    {marque: 'Bagues ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/bague.png'
    },
    {marque: 'Montre femme ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/montre3.png'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/jean3.png'
    },
    {marque: 'Ceinture',
    description:'Dior en cuir noir',
    prix:'20.000F',
    img:'../../../assets/imgg/produit/ceinture.png'
    },
    {marque: 'Chemise',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/chemise2.png'
    },
    {marque: 'Maillot',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'../../../assets/imgg/produit/maillot.png'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'../../../assets/imgg/produit/lunette2.png'
    },
    {marque: 'Pull ',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/pull2.png'
    },
    
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/montre2.png'
    },
    {marque: 'jupe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/Jupe2.png'
    },
    {marque: 'WAX',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'../../../assets/imgg/produit/wax1.png'
    },
    {marque: 'Papettes',
    description:'Simple et leger',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/papette.png'
    },
    {marque: 'Culotte',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'../../../assets/imgg/produit/culotte.png'
    },
    {marque: 'Collier',
    description:'Mettre votre tenue en valeur',
    prix:'20.000F',
    img:'../../../assets/imgg/produit/collier3.png'
    },
    {marque: 'Maillot',
    description:'Être classe est un choix',
    prix:'5.000F',
    img:'../../../assets/imgg/produit/maillot2.png'
    },
    {marque: 'Chapeau',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'../../../assets/imgg/produit/chapeau.png'
    },
     {marque: 'Casquette',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'../../../assets/imgg/produit/casquette.png'
    },
    {marque: 'WAX ',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'../../../assets/imgg/produit/wax2.png'
    }
  ]
Images: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
Nombre: number=10;
P: boolean=false;

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
  OnAffiche(){
  this.HommeHabit.push(...this.Plus);
  this.P=true

  }
}
