export class Adresse {
 private rue : String ;
 private ville : String ;
 private codePostal : String ;

 constructor(rue :String , ville :String ,codePostal : String){
    this.rue = rue ;
    this.ville =ville ;
    this.codePostal = codePostal ;
 }

 // getters et setters

  get Rue() : String {
    return this.rue ;
  }

  get Ville() : String {
    return this.ville;
  }

  get CodePostal() : String {
    return this.codePostal ;
  }

  set ModfRue(rue : String){
    this.rue = rue ;
  }

  set ModfVille(ville : String){
    this.ville = ville ;
  }

  set ModfCode(code : String){
    this.codePostal = code ;
  }


}

