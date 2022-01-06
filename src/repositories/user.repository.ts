import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DataMystockDataSource} from '../datasources';
import {User, UserRelations, Produit, Commande} from '../models';
import {ProduitRepository} from './produit.repository';
import {CommandeRepository} from './commande.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly produits: HasManyRepositoryFactory<Produit, typeof User.prototype.id>;

  public readonly commandes: HasManyRepositoryFactory<Commande, typeof User.prototype.id>;

  constructor(
    @inject('datasources.dataMystock') dataSource: DataMystockDataSource, @repository.getter('ProduitRepository') protected produitRepositoryGetter: Getter<ProduitRepository>, @repository.getter('CommandeRepository') protected commandeRepositoryGetter: Getter<CommandeRepository>,
  ) {
    super(User, dataSource);
    this.commandes = this.createHasManyRepositoryFactoryFor('commandes', commandeRepositoryGetter,);
    this.produits = this.createHasManyRepositoryFactoryFor('produits', produitRepositoryGetter,);
  }
}
