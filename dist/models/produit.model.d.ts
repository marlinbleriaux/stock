import { Entity } from '@loopback/repository';
export declare class Produit extends Entity {
    id?: string;
    name: string;
    description?: string;
    price?: number;
    stock?: number;
    userId?: number;
    constructor(data?: Partial<Produit>);
}
export interface ProduitRelations {
}
export declare type ProduitWithRelations = Produit & ProduitRelations;
