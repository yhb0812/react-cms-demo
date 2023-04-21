
var express = require('express');
const MenuController = require('../../controllers/admin/MenuController');

var MenuRouter = express.Router();




/* GET menu. */
MenuRouter.get("/adminapi/menu/:role",MenuController.getMenu)



module.exports = MenuRouter;
