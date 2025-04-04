import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { TodoistController } from '../controllers/todoist.controller';

const router = Router();
const todoistController = new TodoistController();

router.post('/', asyncHandler(todoistController.create));
router.get('/', asyncHandler(todoistController.getAll));
router.get('/:id', asyncHandler(todoistController.getById));
router.put('/:id', asyncHandler(todoistController.update));
router.delete('/:id', asyncHandler(todoistController.delete));

export default router;
