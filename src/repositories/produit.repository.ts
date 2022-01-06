import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataMystockDataSource} from '../datasources';
import {Produit, ProduitRelations} from '../models';

export class ProduitRepository extends DefaultCrudRepository<
  Produit,
  typeof Produit.prototype.id,
  ProduitRelations
> {
  constructor(
    @inject('datasources.dataMystock') dataSource: DataMystockDataSource,
  ) {
    super(Produit, dataSource);
  }
}
