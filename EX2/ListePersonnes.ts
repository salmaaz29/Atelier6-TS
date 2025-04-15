import {Personne} from './Personne';
import {Adresse} from './Adresse';
class ListePersonnes {
    private personnes: Personne[];

    constructor(p: Personne[]) {
        this.personnes = p;
    }

    // getters et setters 
    get Personnes(): Personne[] {
        return this.personnes;
    }

    set ModfPersonnes(personne: Personne) {
        this.personnes.push(personne);

    }

    findByNom(s: String): Personne | null {
        for(const personne of this.personnes){
            if(personne.Nom == s){
                return personne ;
            }
        }
  return null ;
        
    }

    findByCodePostal(cp: string) : boolean {
        for(let i =0;i<this.personnes.length ; i++){
            personne : Personne ;
            const personne = this.personnes[i];
            for(let j =0;j<personne.Adresse.length ; j++){
                if(personne.Adresse[j].CodePostal == cp){
                    return true ;
            }
            }
        }
        return false ;
    }



    countPersonneVille(ville: string) : number {
       var nombre = 0;
        for(let i =0;i<this.personnes.length ; i++){
            personne : Personne ;
            const personne = this.personnes[i];
            for(let j =0;j<personne.Adresse.length ; j++){
                if(personne.Adresse[j].Ville == ville){
                   nombre++;
            }
            } 
    }
    return nombre ;
}


}
// exemple de test 
// adresse du 1er personne 
const adrs1 = new Adresse("lakhmiss", "tanger", "09876");
const adrs2 = new Adresse("karia", "sale", "09876");
var Adr : Adresse[] =[adrs1,adrs2];

// adresse du 2eme personne 
const adrs3 = new Adresse("boukhalef", "tanger", "09876");
const adrs4 = new Adresse("nakhil", "dakhela", "09876");
var Adr2 : Adresse[] =[adrs3,adrs4];

const p1 = new Personne ("salma", "F",Adr);
const p2 = new Personne ("youness","H",Adr2);
var per : Personne[] = [p1,p2];
// liste des personnes
const tabPersonnes = new ListePersonnes(per);
console.log(tabPersonnes.findByNom("salma"));
console.log(tabPersonnes.countPersonneVille("tanger"));
console.log(tabPersonnes.findByCodePostal("0000"));


