import {Entity, model, property} from '@loopback/repository';

@model()
export class Produit extends Entity {
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
  })
  description?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  stock?: number;

  @property({
    type: 'number',
  })
  userId?: number;

  constructor(data?: Partial<Produit>) {
    super(data);
  }
}

export interface ProduitRelations {
  // describe navigational properties here
}

export type ProduitWithRelations = Produit & ProduitRelations;
