'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class SessionController {
  * store(request, response) {
    const { grant_type: grantType, username: email, password } = request.all();

    if (grantType !== 'password') {
      return response.status(400).json({
        status: 400,

        errors: [{ detail: 'Unsupported grant_type' }],
      });
    }

    try {
      const user = yield User.findBy('email', email);

      yield Hash.verify(password, user.password);
      const jwt = yield request.auth.generate(user);

      return response.json({ access_token: jwt });
    } catch (e) {
      return response.status(401).json({
        status: 401,

        errors: [{ detail: 'User failed to login' }],
      });
    }
  }
}

module.exports = SessionController;
