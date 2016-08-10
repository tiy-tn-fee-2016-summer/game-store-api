'use strict';

const Schema = use('Schema');

class GameSchema extends Schema {

  up() {
    this.create('games', (table) => {
      table.increments();
      table.string('name');
      table.integer('player_max');
      table.integer('player_min');
      table.string('publisher');
      table.string('release_date');
      table.integer('avg_play_time');

      table.integer('category_id').references('categories.id');

      table.timestamps();
    });
  }

  down() {
    this.drop('games');
  }

}

module.exports = GameSchema;
