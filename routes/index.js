const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})    

// whenever file is imported in app, indexRouter is set to this routervariable
module.exports = router