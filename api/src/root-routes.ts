import express from "express";
import type { Response, Request, NextFunction } from "express";
import { core } from "./lib";
import { userRouter } from "./modules/user";





const router = express.Router();

router.use("/users", userRouter);

export default router;


// router.use("/users", ...validateCreateUser, validateRequestMiddleware, userRouter.bind(userRouter));
// import {
//  body,
//  query,
//  ValidationChain,
//  validationResult,
// } from "express-validator";

// const validateCreateUser = [
//  body("name")
//    .isString()
//    .notEmpty()
//    .withMessage("Name is required && Name must be a string"),
// ];

// const validateRequestMiddleware = (
//  req: Request,
//  res: Response,
//  next: NextFunction
// ) => {
//  const errors = validationResult(req);
//  if (!errors.isEmpty()) {
//    return res.status(400).json({ errors: errors.array() });
//  }
//  next();
// };
