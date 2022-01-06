import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DataMystockDataSource } from '../datasources';
import { Commande, CommandeRelations, Produit } from '../models';
import { ProduitRepository } from './produit.repository';
export declare class CommandeRepository extends DefaultCrudRepository<Commande, typeof Commande.prototype.id, CommandeRelations> {
    protected produitRepositoryGetter: Getter<ProduitRepository>;
    readonly produit: BelongsToAccessor<Produit, typeof Commande.prototype.id>;
    constructor(dataSource: DataMystockDataSource, produitRepositoryGetter: Getter<ProduitRepository>);
}
