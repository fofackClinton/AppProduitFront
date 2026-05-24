import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCatgegoryComponent } from './recherche-par-catgegory/recherche-par-catgegory.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const routes: Routes = [

  {path: 'produits', component: ProduitComponent},
  {path: 'add-produit', component: AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path:"rechercheParCategory", component: RechercheParCatgegoryComponent},
  {path:  'login', component: LoginComponent},
  {path:  'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: 'produits', pathMatch: 'full'},
];
