'use strict';

const Game = use('App/Model/Game');
const attributes = [
  'name',
  'player-max',
  'player-min',
  'publisher',
  'release-date',
  'avg-play-time',
  'price',
  'quantity',
];

class GameController {

  * index(request, response) {
    const games = yield Game.with('category').fetch();

    response.jsonApi('Game', games);
  }

  * store(request, response) {
    const gameParams = request.jsonApi.getAttributesSnakeCase(attributes);
    const categoryId = request.jsonApi.getRelationshipId('category');

    const game = yield Game.create(Object.assign({}, gameParams, { category_id: categoryId }));
    response.jsonApi('Game', game);
  }

  * show(request, response) {
    const id = request.param('id');

    const game = yield Game.with('category').where({ id }).firstOrFail();
    response.jsonApi('Game', game);
  }

  * update(request, response) {
    const gameParams = request.jsonApi.getAttributesSnakeCase(attributes);
    const id = request.param('id');
    request.jsonApi.assertId(id);
    const categoryId = request.jsonApi.getRelationshipId('category');

    const game = yield Game.with('category').where({ id }).firstOrFail();
    yield game.update(Object.assign({}, gameParams, { category_id: categoryId }));

    response.jsonApi('Game', game);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const game = yield Game.query().where({ id }).firstOrFail();
    yield game.delete();

    response.status(204).send();
  }

}

module.exports = GameController;
