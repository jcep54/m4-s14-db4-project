/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del()
  await knex('steps').insert([
    {step_text: 'make the chicken', step_order: 1, recipe_id: 1},
    {step_text: 'add the sauce', step_order: 2, recipe_id: 1},
    {step_text: 'add the parm', step_order: 3, recipe_id: 1},
    {step_text: 'clean the ribs', step_order: 1, recipe_id: 2},
    {step_text: 'cook the ribs', step_order: 2, recipe_id: 2},
    {step_text: 'sauce the ribs', step_order: 3, recipe_id: 2}
  ]);
};
