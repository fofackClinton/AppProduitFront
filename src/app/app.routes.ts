import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

export const routes: Routes = [

  {path: 'produits', component: ProduitComponent},
  {path: 'add-produit', component: AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: 'produits', pathMatch: 'full'},
];
