/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {ing_name:'ribs', ing_unit:'lbs'},
    {ing_name:'chicken', ing_unit:'lbs'},
    {ing_name:'sauce', ing_unit:'tbls'}
  ]);
};
