import { Produit } from './../model/produit.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit {
  categories!: Categorie[];
  updatedCatId!: number;
  currentProduit!: Produit;

  constructor(private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) { }
   ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updatedCatId != this.currentProduit.categorie?.idCat;
      });
  }

  updateProduit() {
    this.currentProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.updatedCatId
    )!;
    this.produitService.updateProduit(this.currentProduit).subscribe((prod) => {
      this.router.navigate(['produits']);
    });
  }

}
