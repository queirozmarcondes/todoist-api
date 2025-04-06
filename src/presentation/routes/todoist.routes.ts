import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { CreateTodoistController } from '../controllers/todo/create-todoist.controller';
import { GetAllTodoistsController } from '../controllers/todo/get-all-todoists.controller';
import { GetTodoistByIdController } from '../controllers/todo/get-todoist-by-id.controller';
import { UpdateTodoistController } from '../controllers/todo/update-todoist.controller';
import { DeleteTodoistController } from '../controllers/todo/delete-todoist.controller';

const router = Router();

// Instância de cada controller
const createController = new CreateTodoistController();
const getAllController = new GetAllTodoistsController();
const getByIdController = new GetTodoistByIdController();
const updateController = new UpdateTodoistController();
const deleteController = new DeleteTodoistController();

router.post('/', asyncHandler(createController.handle.bind(createController)));
router.get('/', asyncHandler(getAllController.handle.bind(getAllController)));
router.get('/:id', asyncHandler(getByIdController.handle.bind(getByIdController)));
router.put('/:id', asyncHandler(updateController.handle.bind(updateController)));
router.delete('/:id', asyncHandler(deleteController.handle.bind(deleteController)));

export default router;
