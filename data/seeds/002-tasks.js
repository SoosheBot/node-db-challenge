
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Mow lawn', notes: "Task 1", project_id: 1, completed: false},
        {id: 2, description: 'Measure lawn', notes: "Task 2", project_id: 2, completed: false},
        {id: 3, description: 'Fertilize lawn', notes: "Task 3", project_id: 3, completed: false},
        {id: 4, description: 'Water lawn', notes: "Task 4", project_id: 1, completed: false},
        {id: 5, description: 'Weed lawn', notes: "Task 5", project_id: 2, completed: false},
        {id: 6, description: 'Admire lawn', notes: "Task 6", project_id: 3, completed: false}
      ]);
    });
};
