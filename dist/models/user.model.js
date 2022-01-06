"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const produit_model_1 = require("./produit.model");
const commande_model_1 = require("./commande.model");
let User = class User extends repository_1.Entity {
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
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => produit_model_1.Produit),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "produits", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => commande_model_1.Commande),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "commandes", void 0);
User = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map