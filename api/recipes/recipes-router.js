const router = require('express').Router()


router.use('*', (req,res) =>{
    res.json('recipe api router up and running')
})

router.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message
    })
})
module.exports = router