import express from 'express';
import { UsersController } from '../controllers/UsersController.js';
import { validId } from '../middlewares/global.js';

const userRouter = express.Router();
const userController = new UsersController();

userRouter.get('/', userController.getUsers)
userRouter.get('/:id', validId, userController.getUserById)
userRouter.post('/', userController.createUser)
userRouter.patch('/:id', validId, userController.updateUser)
userRouter.delete('/:id', validId, userController.deleteUser)

export default userRouter