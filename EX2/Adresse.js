"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    Object.defineProperty(Adresse.prototype, "Rue", {
        // getters et setters
        get: function () {
            return this.rue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "Ville", {
        get: function () {
            return this.ville;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "CodePostal", {
        get: function () {
            return this.codePostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "ModfRue", {
        set: function (rue) {
            this.rue = rue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "ModfVille", {
        set: function (ville) {
            this.ville = ville;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "ModfCode", {
        set: function (code) {
            this.codePostal = code;
        },
        enumerable: false,
        configurable: true
    });
    return Adresse;
}());
exports.Adresse = Adresse;
