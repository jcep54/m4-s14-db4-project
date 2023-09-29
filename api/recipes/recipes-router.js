const router = require('express').Router()

const Recipes = require('./recipes-model')

router.get('/',(req, res) =>{
    res.json('router up and running')
})
router.get('/:recipe_id', async(req,res,next) =>{
  try { 
    const recipeById = await Recipes.getById(req.params.recipe_id)
    res.json(recipeById)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message
    })
})
module.exports = router