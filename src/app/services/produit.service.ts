import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  produits!: Produit[]; //un tableau de Produit
  produit!: Produit;
  categories!: Categorie[];

  constructor(private http: HttpClient, private AuthService: AuthService) { }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiUrl + "/all");
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(environment.apiUrl, prod);
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.get<Produit>(url);
  }

  listeCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(environment.apiUrl + "/cat");
  }


  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(environment.apiUrl, prod, httpOptions);
  }
}
