'use strict';

const Category = use('App/Model/Category');
const attributes = ['name'];

class CategoryController {

  * index(request, response) {
    const categories = yield Category.with('games').fetch();

    response.jsonApi('Category', categories);
  }

  * store(request, response) {
    const categoryParams = request.jsonApi.getAttributesSnakeCase(attributes);

    const category = yield Category.create(Object.assign({}, categoryParams));
    response.jsonApi('Category', category);
  }

  * show(request, response) {
    const id = request.param('id');

    const category = yield Category.with('games').where({ id }).firstOrFail();
    response.jsonApi('Category', category);
  }

  * update(request, response) {
    const categoryParams = request.jsonApi.getAttributesSnakeCase(attributes);
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const category = yield Category.with('games').where({ id }).firstOrFail();
    yield category.update(categoryParams);

    response.jsonApi('Category', category);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const category = yield Category.query().where({ id }).firstOrFail();
    yield category.delete();

    response.status(204).send();
  }

}

module.exports = CategoryController;
