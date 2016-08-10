'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {
  * store(request, response) {
    const {
      data: {
        attributes: { email, password },
      },
    } = request.all();

    const user = yield User.create({ email, password: yield Hash.make(password) });

    response.jsonApi('User', user, 201);
  }

  * current(request, response) {
    const user = request.authUser;

    response.jsonApi('User', user);
  }
}

module.exports = UserController;
