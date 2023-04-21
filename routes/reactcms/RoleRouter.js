
var express = require('express');
const RoleController = require('../../controllers/admin/RoleController');

var RoleRouter = express.Router();




/* GET Role. */
RoleRouter.get("/adminapi/role",RoleController.getRole)



module.exports = RoleRouter;
