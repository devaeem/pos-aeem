import express, { NextFunction } from "express";
import type {Response ,Request} from "express";
import { userController } from "./user.boostarp";
import { Router } from "../../lib/core";
// import { Router } from '';



const router = new Router();
// const router = express.Router();

 // router.route('/').get(userController.getAll)

router.get('/',userController.getAll);
router.post('/' ,userController.createUser);
// router.route('/').post(userController.createUser)

export default router.instance;
// export default router