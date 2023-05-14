import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-femme',
  templateUrl: './categorie-femme.component.html',
  styleUrls: ['./categorie-femme.component.css']
})
export class CategorieFEMMEComponent {
  title = 'Femme';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'Robe-Oversize',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'../../../assets/img-femme/f1.png'
    },
    {marque: 'Bagues',
    description:'Pour vos mariages',
    prix:'20.000F',
    img:'../../../assets/img-femme/f7.png'
    },
    {marque: 'Sac',
    description:'Sac en cuir noir',
    prix:'15.000F',
    img:'../../../assets/img-femme/f2.png'
    },
    {marque: 'Talons',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'../../../assets/img-femme/f5.png'
    },
    {marque: 'Talon ',
    description:'Souplesse pure',
    prix:'17.000F',
    img:'../../../assets/img-femme/f8.png'
    },
    {marque: 'Vaxe',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'../../../assets/img-femme/f4.png'
    },
    {marque: 'WAX',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'../../../assets/img-femme/f3.png'
    },
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'../../../assets/img-femme/f6.png'
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
