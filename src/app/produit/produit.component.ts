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

produits : Produit[]; //un tableau de Produit
constructor(private produitService: ProduitService ) {
this.produits = produitService.listeProduits();
}
supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}

  ngOnInit(): void {
  }
}
