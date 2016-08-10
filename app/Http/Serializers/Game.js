const attributes = [
  'name',
  'player_max',
  'player_min',
  'publisher',
  'release_date',
  'avg_play_time',
];

const relationships = [
  'category',
];

module.exports = {
  type: 'game',

  serializer: {
    attributes: [...attributes, ...relationships],

    category: {
      ref: 'id',
      included: true,
      attributes: require('./Category').serializer.attributes,
    },
  },
};
