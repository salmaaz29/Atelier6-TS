"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personne_1 = require("./Personne");
var Adresse_1 = require("./Adresse");
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(p) {
        this.personnes = p;
    }
    Object.defineProperty(ListePersonnes.prototype, "Personnes", {
        // getters et setters 
        get: function () {
            return this.personnes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListePersonnes.prototype, "ModfPersonnes", {
        set: function (personne) {
            this.personnes.push(personne);
        },
        enumerable: false,
        configurable: true
    });
    ListePersonnes.prototype.findByNom = function (s) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.Nom == s) {
                return personne;
            }
        }
        return null;
    };
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var i = 0; i < this.personnes.length; i++) {
            personne: Personne_1.Personne;
            var personne = this.personnes[i];
            for (var j = 0; j < personne.Adresse.length; j++) {
                if (personne.Adresse[j].CodePostal == cp) {
                    return true;
                }
            }
        }
        return false;
    };
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var nombre = 0;
        for (var i = 0; i < this.personnes.length; i++) {
            personne: Personne_1.Personne;
            var personne = this.personnes[i];
            for (var j = 0; j < personne.Adresse.length; j++) {
                if (personne.Adresse[j].Ville == ville) {
                    nombre++;
                }
            }
        }
        return nombre;
    };
    return ListePersonnes;
}());
// exemple de test 
// adresse du 1er personne 
var adrs1 = new Adresse_1.Adresse("lakhmiss", "tanger", "09876");
var adrs2 = new Adresse_1.Adresse("karia", "sale", "09876");
var Adr = [adrs1, adrs2];
// adresse du 2eme personne 
var adrs3 = new Adresse_1.Adresse("boukhalef", "tanger", "09876");
var adrs4 = new Adresse_1.Adresse("nakhil", "dakhela", "09876");
var Adr2 = [adrs3, adrs4];
var p1 = new Personne_1.Personne("salma", "F", Adr);
var p2 = new Personne_1.Personne("youness", "H", Adr2);
var per = [p1, p2];
// liste des personnes
var tabPersonnes = new ListePersonnes(per);
console.log(tabPersonnes.findByNom("salma"));
console.log(tabPersonnes.countPersonneVille("tanger"));
console.log(tabPersonnes.findByCodePostal("0000"));
