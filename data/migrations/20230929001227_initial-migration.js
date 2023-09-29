/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
   await knex.schema
    .createTable('recipes', table =>{
        table.increments('recipe_id')
        table.string('recipe_name') 
    })
    .createTable('ingredients', table =>{
        table.increments('ing_id')
        table.string('ing_name')
        table.string('ing_unit')
    })
    .createTable('steps', table =>{
        table.increments('step_id')
        table.string('step_text')
        table.string('step_order')
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            
    })
    .createTable('step_ingredients', table =>{
        table.increments('step_ing_id')
        table.decimal('quantity')
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('ing_id')
            .unsigned()
            .notNullable()
            .references('ing_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })

    
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
   await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

};
