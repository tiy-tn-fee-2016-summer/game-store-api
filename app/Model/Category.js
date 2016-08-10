'use strict';

const Lucid = use('Lucid');

class Category extends Lucid {
  games() {
    return this.hasMany('App/Model/Game');
  }
}

module.exports = Category;
