import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Produit} from './produit.model';

@model()
export class Commande extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    default: () => Date(),
  })
  created_at?: Date;

  @property({
    type: 'date',
    default: () => Date(),
  })
  updated_at?: Date;

  @property({
    type: 'number',
  })
  quantite?: number;

  @property({
    type: 'number',
  })
  userId?: number;

  @belongsTo(() => Produit)
  produitId: number;

  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
