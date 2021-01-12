const express = require('express')

const { signup } = require('../controller/appController')

const router = express.Router()

// /api/user/signup
// router.post('/user/signup', (req, res) => {
//     res.status(200)
//     res.type('application/json')
    
// }) 

module.exports = router;