import {Entity, model, property, hasMany} from '@loopback/repository';
import {Produit} from './produit.model';
import {Commande} from './commande.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    required: true,
  })
  role: boolean;

  @hasMany(() => Produit)
  produits: Produit[];

  @hasMany(() => Commande)
  commandes: Commande[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
