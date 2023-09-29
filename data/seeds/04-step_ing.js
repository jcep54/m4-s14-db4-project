/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').del()
  await knex('step_ingredients').insert([
    {ing_id:2, step_id: 1},
    {ing_id:3, step_id: 2},
    {ing_id:1, step_id: 3},
    {ing_id:1, step_id: 4},
    {ing_id:1, step_id: 5},
    {ing_id:3, step_id: 6}
  ]);
};
