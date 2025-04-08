import { Request, Response, NextFunction } from 'express';
import { TodoistService } from '../../../application/services/todoist.service';

const todoistService = new TodoistService();

export class DeleteTodoistController {
    async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const todoist = await todoistService.deleteTodoist(req.params.id);
            if (!todoist) {
                res.status(404).json({ message: 'Todoist not found' });
                return;
            }

            res.json({ message: 'Todoist deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}
