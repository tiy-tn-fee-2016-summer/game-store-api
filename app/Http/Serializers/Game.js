const attributes = [
  'name',
  'player_max',
  'player_min',
  'publisher',
  'release_date',
  'avg_play_time',
  'price',
  'quantity',
];

const relationships = [
  'category',
];

module.exports = {
  type: 'game',

  serializer: {
    attributes: [...attributes, ...relationships],

    category: Object.assign({}, require('./Category').serializer, { ref: 'id', included: true }),
  },
};
