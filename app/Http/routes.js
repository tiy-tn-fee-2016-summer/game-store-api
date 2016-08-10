'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.group('api', () => {
  Route.post('/register', 'UserController.store');
  Route.post('/token-auth', 'SessionController.store');
  Route.get('/user/current', 'UserController.current').middleware('auth');

  Route.resource('/categories', 'CategoryController')
    .only('index', 'show').middleware('auth');
  Route.resource('/categories', 'CategoryController')
    .only('store', 'update', 'destroy').middleware('auth');

  Route.resource('/games', 'GameController')
    .only('index', 'show').middleware('auth');

  Route.resource('/games', 'GameController')
    .only('store', 'update', 'destroy').middleware('auth');
}).prefix('/api');
