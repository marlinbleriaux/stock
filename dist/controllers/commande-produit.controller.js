"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeProduitController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CommandeProduitController = class CommandeProduitController {
    constructor(commandeRepository) {
        this.commandeRepository = commandeRepository;
    }
    async getProduit(id) {
        return this.commandeRepository.produit(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/commandes/{id}/produit', {
        responses: {
            '200': {
                description: 'Produit belonging to Commande',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Produit) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CommandeProduitController.prototype, "getProduit", null);
CommandeProduitController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CommandeRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CommandeRepository])
], CommandeProduitController);
exports.CommandeProduitController = CommandeProduitController;
//# sourceMappingURL=commande-produit.controller.js.map