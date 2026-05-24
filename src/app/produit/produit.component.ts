import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit',
  imports: [CommonModule,RouterLink],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {

produits! : Produit[]; //un tableau de Produit
 constructor(private produitService: ProduitService, public authService: AuthService ) {}

   ngOnInit() {
    this.chargerProduits();
     }

    chargerProduits(){
      this.produitService.listeProduit().subscribe(prods => {
        console.log(prods);
        this.produits = prods;
      });
    }

    supprimerProduit(p: Produit)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
           });
    }
}

