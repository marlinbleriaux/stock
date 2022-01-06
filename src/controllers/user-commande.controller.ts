import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Commande,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCommandeController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/commandes', {
    responses: {
      '200': {
        description: 'Array of User has many Commande',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Commande)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Commande>,
  ): Promise<Commande[]> {
    return this.userRepository.commandes(id).find(filter);
  }

  @post('/users/{id}/commandes', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Commande)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commande, {
            title: 'NewCommandeInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) commande: Omit<Commande, 'id'>,
  ): Promise<Commande> {
    return this.userRepository.commandes(id).create(commande);
  }

  @patch('/users/{id}/commandes', {
    responses: {
      '200': {
        description: 'User.Commande PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commande, {partial: true}),
        },
      },
    })
    commande: Partial<Commande>,
    @param.query.object('where', getWhereSchemaFor(Commande)) where?: Where<Commande>,
  ): Promise<Count> {
    return this.userRepository.commandes(id).patch(commande, where);
  }

  @del('/users/{id}/commandes', {
    responses: {
      '200': {
        description: 'User.Commande DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Commande)) where?: Where<Commande>,
  ): Promise<Count> {
    return this.userRepository.commandes(id).delete(where);
  }
}
