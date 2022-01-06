import { Count, Filter, Where } from '@loopback/repository';
import { User, Commande } from '../models';
import { UserRepository } from '../repositories';
export declare class UserCommandeController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Commande>): Promise<Commande[]>;
    create(id: typeof User.prototype.id, commande: Omit<Commande, 'id'>): Promise<Commande>;
    patch(id: string, commande: Partial<Commande>, where?: Where<Commande>): Promise<Count>;
    delete(id: string, where?: Where<Commande>): Promise<Count>;
}
