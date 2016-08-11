'use strict';

const Schema = use('Schema');

class AddPriceToGameSchema extends Schema {

  up() {
    this.table('games', (table) => {
      table.float('price').default(39.99);
      table.integer('inventory').default(0);
    });
  }

  down() {
    this.table('games', (table) => {
      table.dropColumn('price');
      table.dropColumn('inventory');
    });
  }

}

module.exports = AddPriceToGameSchema;
