import { Count, Filter, Where } from '@loopback/repository';
import { User, Produit } from '../models';
import { UserRepository } from '../repositories';
export declare class UserProduitController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Produit>): Promise<Produit[]>;
    create(id: typeof User.prototype.id, produit: Omit<Produit, 'id'>): Promise<Produit>;
    patch(id: string, produit: Partial<Produit>, where?: Where<Produit>): Promise<Count>;
    delete(id: string, where?: Where<Produit>): Promise<Count>;
}
