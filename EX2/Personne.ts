import {Adresse}  from './Adresse';
export class Personne {
    private nom : String ;
    private sexe : String ;
    private adresses : Adresse[] ;

    constructor(nom : String , sexe : String , adresses : Adresse[]){
        this.nom = nom ;
        this.sexe = sexe ;
        this.adresses = adresses;
    }

// setters et getters

get Nom() : String {
    return this.nom ;
  }

  get Sexe() : String {
    return this.sexe;
  }

  get Adresse() : Adresse[] {
    return this.adresses ;
  }

  set ModfNom(nom : String){
    this.nom = nom ;
  }

  set ModfSexe(sexe : String){
    this.sexe = sexe ;
  }

  set ModfAdresses(adresse : Adresse){
   this.adresses.push(adresse);
  }

}