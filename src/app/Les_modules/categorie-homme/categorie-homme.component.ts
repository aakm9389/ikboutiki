import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-homme',
  templateUrl: './categorie-homme.component.html',
  styleUrls: ['./categorie-homme.component.css']
})
export class CategorieHOMMEComponent {
  title = 'Homme';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'Pull',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'../../../assets/img-homme/h1.png'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'../../../assets/img-homme/h2.png'
    },
    {marque: 'Chemise',
    description:'Chemise',
    prix:'20.000F',
    img:'../../../assets/img-homme/h3.png'
    },
    {marque: 'Boubou',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'../../../assets/img-homme/h4.png'
    },
    {marque: 'Super vainqueur',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'../../../assets/img-homme/h5.png'
    },
    {marque: 'WWax',
    description:'Wax pour homme',
    prix:'30.000F',
    img:'../../../assets/img-homme/h6.png'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'5.000F',
    img:'../../../assets/img-homme/lunette.png'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'../../../assets/img-homme/bazin.png'
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
