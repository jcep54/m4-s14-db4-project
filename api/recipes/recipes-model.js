const db = require('../../data/db-config')



async function getById (recipe_id){
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as st', 'st.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredients as si', 'st.step_id', 'si.step_id')
        .select(
            'r.recipe_name',
            'step_order',
            'step_text',
            'ing_id'
        )
        .where('r.recipe_id',recipe_id)

    const whoa = recipeRows.reduce(( acc, row) =>{
        if(row.step_order){
            acc.steps.push({step_order:row.step_order, step_text:row.step_text, ingredients:[]})
        }

        return acc
    },{recipe_name:recipeRows[0].recipe_name, steps:[]})

    const result = {
        recipe_name: recipeRows[0].recipe_name,
        steps: recipeRows.reduce((acc, row) =>{
            if(row.step_order){
              return  acc.concat({
                    step_order:row.step_order, step_text:row.step_text
                })
            }

            return acc
        },[])
    }
    return result
}


module.exports = {
    getById
}