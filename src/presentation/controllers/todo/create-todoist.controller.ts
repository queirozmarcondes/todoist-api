import { Request, Response, NextFunction } from 'express';
import { TodoistService } from '../../../application/services/todoist.service';

const todoistService = new TodoistService();

export class CreateTodoistController {
    async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const todoist = await todoistService.createTodoist(req.body);
            res.status(201).json(todoist);
        } catch (error) {
            next(error);
        }
    }
}
