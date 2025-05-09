import { Request, Response, NextFunction } from 'express';
import { TodoistService } from '../../../application/services/todoist.service';

const todoistService = new TodoistService();

export class GetTodoistByIdController {
    async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const todoist = await todoistService.getTodoistById(req.params.id);
            if (!todoist) {
                res.status(404).json({ message: 'Todoist not found' });
                return;
            }

            res.json(todoist);
        } catch (error) {
            next(error);
        }
    }
}
