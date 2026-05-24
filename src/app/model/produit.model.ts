import { Categorie } from "./categorie.model";

export interface Produit {
idProduit : number;
nomProduit? : string;
prixProduit? : number;
dateCreation? : Date ;
categorie? : Categorie;
}
