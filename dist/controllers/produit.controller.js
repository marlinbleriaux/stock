"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProduitController = class ProduitController {
    constructor(produitRepository) {
        this.produitRepository = produitRepository;
    }
    async create(produit) {
        return this.produitRepository.create(produit);
    }
    async count(where) {
        return this.produitRepository.count(where);
    }
    async find(filter) {
        return this.produitRepository.find(filter);
    }
    async updateAll(produit, where) {
        return this.produitRepository.updateAll(produit, where);
    }
    async findById(id, filter) {
        return this.produitRepository.findById(id, filter);
    }
    async updateById(id, produit) {
        await this.produitRepository.updateById(id, produit);
    }
    async replaceById(id, produit) {
        await this.produitRepository.replaceById(id, produit);
    }
    async deleteById(id) {
        await this.produitRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/produits'),
    (0, rest_1.response)(200, {
        description: 'Produit model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Produit) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, {
                    title: 'NewProduit',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/produits/count'),
    (0, rest_1.response)(200, {
        description: 'Produit model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Produit)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/produits'),
    (0, rest_1.response)(200, {
        description: 'Array of Produit model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Produit, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Produit)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/produits'),
    (0, rest_1.response)(200, {
        description: 'Produit PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Produit)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Produit, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/produits/{id}'),
    (0, rest_1.response)(200, {
        description: 'Produit model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Produit, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/produits/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produit PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Produit, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Produit]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/produits/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produit PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Produit]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/produits/{id}'),
    (0, rest_1.response)(204, {
        description: 'Produit DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProduitController.prototype, "deleteById", null);
ProduitController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProduitRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProduitRepository])
], ProduitController);
exports.ProduitController = ProduitController;
//# sourceMappingURL=produit.controller.js.map