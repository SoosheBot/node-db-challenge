
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'project 1', description: '1st project', completed: false},
        {id: 2, project_name: 'project 2', description: '2nd project', completed: false},
        {id: 3, project_name: 'project 3', description: '3rd project', completed: false}
      ]);
    });
};
