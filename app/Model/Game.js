'use strict';

const Lucid = use('Lucid');

class Game extends Lucid {
  category() {
    return this.belongsTo('App/Model/Category');
  }
}

module.exports = Game;
