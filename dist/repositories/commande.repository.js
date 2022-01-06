"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CommandeRepository = class CommandeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, produitRepositoryGetter) {
        super(models_1.Commande, dataSource);
        this.produitRepositoryGetter = produitRepositoryGetter;
        this.produit = this.createBelongsToAccessorFor('produit', produitRepositoryGetter);
    }
};
CommandeRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.dataMystock')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProduitRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.DataMystockDataSource, Function])
], CommandeRepository);
exports.CommandeRepository = CommandeRepository;
//# sourceMappingURL=commande.repository.js.map