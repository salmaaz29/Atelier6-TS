"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, sexe, adresses) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    Object.defineProperty(Personne.prototype, "Nom", {
        // setters et getters
        get: function () {
            return this.nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "Sexe", {
        get: function () {
            return this.sexe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "Adresse", {
        get: function () {
            return this.adresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "ModfNom", {
        set: function (nom) {
            this.nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "ModfSexe", {
        set: function (sexe) {
            this.sexe = sexe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "ModfAdresses", {
        set: function (adresse) {
            this.adresses.push(adresse);
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;
