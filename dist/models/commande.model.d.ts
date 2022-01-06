import { Entity } from '@loopback/repository';
export declare class Commande extends Entity {
    id?: string;
    created_at?: Date;
    updated_at?: Date;
    quantite?: number;
    userId?: number;
    produitId: number;
    constructor(data?: Partial<Commande>);
}
export interface CommandeRelations {
}
export declare type CommandeWithRelations = Commande & CommandeRelations;
