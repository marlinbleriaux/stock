import { Commande, Produit } from '../models';
import { CommandeRepository } from '../repositories';
export declare class CommandeProduitController {
    commandeRepository: CommandeRepository;
    constructor(commandeRepository: CommandeRepository);
    getProduit(id: typeof Commande.prototype.id): Promise<Produit>;
}
