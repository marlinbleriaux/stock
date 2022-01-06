import { Entity } from '@loopback/repository';
import { Produit } from './produit.model';
import { Commande } from './commande.model';
export declare class User extends Entity {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: boolean;
    produits: Produit[];
    commandes: Commande[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
