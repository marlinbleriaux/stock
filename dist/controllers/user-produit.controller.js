"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProduitController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserProduitController = class UserProduitController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.produits(id).find(filter);
    }
    async create(id, produit) {
        return this.userRepository.produits(id).create(produit);
    }
    async patch(id, produit, where) {
        return this.userRepository.produits(id).patch(produit, where);
    }
    async delete(id, where) {
        return this.userRepository.produits(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/users/{id}/produits', {
        responses: {
            '200': {
                description: 'Array of User has many Produit',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Produit) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserProduitController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/users/{id}/produits', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Produit) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, {
                    title: 'NewProduitInUser',
                    exclude: ['id'],
                    optional: ['userId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserProduitController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/users/{id}/produits', {
        responses: {
            '200': {
                description: 'User.Produit PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Produit))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserProduitController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/users/{id}/produits', {
        responses: {
            '200': {
                description: 'User.Produit DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Produit))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserProduitController.prototype, "delete", null);
UserProduitController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UserRepository])
], UserProduitController);
exports.UserProduitController = UserProduitController;
//# sourceMappingURL=user-produit.controller.js.map