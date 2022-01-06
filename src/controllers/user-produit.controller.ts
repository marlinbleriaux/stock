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
  Produit,
} from '../models';
import {UserRepository} from '../repositories';

export class UserProduitController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/produits', {
    responses: {
      '200': {
        description: 'Array of User has many Produit',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produit)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Produit>,
  ): Promise<Produit[]> {
    return this.userRepository.produits(id).find(filter);
  }

  @post('/users/{id}/produits', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produit)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produit, {
            title: 'NewProduitInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) produit: Omit<Produit, 'id'>,
  ): Promise<Produit> {
    return this.userRepository.produits(id).create(produit);
  }

  @patch('/users/{id}/produits', {
    responses: {
      '200': {
        description: 'User.Produit PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produit, {partial: true}),
        },
      },
    })
    produit: Partial<Produit>,
    @param.query.object('where', getWhereSchemaFor(Produit)) where?: Where<Produit>,
  ): Promise<Count> {
    return this.userRepository.produits(id).patch(produit, where);
  }

  @del('/users/{id}/produits', {
    responses: {
      '200': {
        description: 'User.Produit DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Produit)) where?: Where<Produit>,
  ): Promise<Count> {
    return this.userRepository.produits(id).delete(where);
  }
}
