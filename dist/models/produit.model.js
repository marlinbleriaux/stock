"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Produit = class Produit extends repository_1.Entity {
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
], Produit.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Produit.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Produit.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Produit.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Produit.prototype, "stock", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Produit.prototype, "userId", void 0);
Produit = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Produit);
exports.Produit = Produit;
//# sourceMappingURL=produit.model.js.map