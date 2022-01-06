import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataMystockDataSource} from '../datasources';
import {Commande, CommandeRelations, Produit} from '../models';
import {ProduitRepository} from './produit.repository';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.id,
  CommandeRelations
> {

  public readonly produit: BelongsToAccessor<Produit, typeof Commande.prototype.id>;

  constructor(
    @inject('datasources.dataMystock') dataSource: DataMystockDataSource, @repository.getter('ProduitRepository') protected produitRepositoryGetter: Getter<ProduitRepository>,
  ) {
    super(Commande, dataSource);
    this.produit = this.createBelongsToAccessorFor('produit', produitRepositoryGetter,);
  }
}
