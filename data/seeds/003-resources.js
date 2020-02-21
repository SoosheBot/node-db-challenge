
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'lawnmower', description: "heavy and teethy"},
        {id: 2, name: 'fertilizer', description: "heavy and stinky"},
        {id: 3, name: 'measuring tape', description: "somewhat accurate"},
        {id: 4, name: 'leaf blower', description: "heavy and noisy"},
        {id: 5, name: 'water hose', description: "heavy and damp"},
        {id: 6, name: 'gardening gloves', description: "protective and cozy"},
      ]);
    });
};
