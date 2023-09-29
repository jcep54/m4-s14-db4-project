const router = require('express').Router()

router.get('/',(req, res) =>{
    res.json('router up and running')
})

router.use((err, req, res, next) =>{ //eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message
    })
})
module.exports = router