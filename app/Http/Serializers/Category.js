module.exports = {
  type: 'category',

  serializer: {
    attributes: ['name', 'games'],

    games: Object.assign({}, require('./Game').serializer, { ref: 'id', included: false }),
  },
};
