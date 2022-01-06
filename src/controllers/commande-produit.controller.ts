import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Commande,
  Produit,
} from '../models';
import {CommandeRepository} from '../repositories';

export class CommandeProduitController {
  constructor(
    @repository(CommandeRepository)
    public commandeRepository: CommandeRepository,
  ) { }

  @get('/commandes/{id}/produit', {
    responses: {
      '200': {
        description: 'Produit belonging to Commande',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produit)},
          },
        },
      },
    },
  })
  async getProduit(
    @param.path.string('id') id: typeof Commande.prototype.id,
  ): Promise<Produit> {
    return this.commandeRepository.produit(id);
  }
}
