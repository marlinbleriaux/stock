"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commande = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const produit_model_1 = require("./produit.model");
let Commande = class Commande extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Commande.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        default: () => Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Commande.prototype, "created_at", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        default: () => Date(),
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Commande.prototype, "updated_at", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Commande.prototype, "quantite", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Commande.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => produit_model_1.Produit),
    (0, tslib_1.__metadata)("design:type", Number)
], Commande.prototype, "produitId", void 0);
Commande = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Commande);
exports.Commande = Commande;
//# sourceMappingURL=commande.model.js.map