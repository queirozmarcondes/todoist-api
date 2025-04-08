import { Request, Response, NextFunction } from 'express';
import { TodoistService } from '../../../application/services/todoist.service';

const todoistService = new TodoistService();

export class GetAllTodoistsController {
    async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const todoists = await todoistService.getAllTodoists();
            res.json(todoists);
        } catch (error) {
            next(error);
        }
    }
}
