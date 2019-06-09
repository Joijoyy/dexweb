const express = require('express')
const routes = express.Router()

const frontendController = require('./../controllers/frontendController')

routes.get('/',frontendController.indexPage)

module.exports = routes