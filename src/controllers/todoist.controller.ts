import { Request, Response, NextFunction } from 'express';
import { TodoistService } from '../services/todoist.service';

const todoistService = new TodoistService();

export class TodoistController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const todoist = await todoistService.createTodoist(req.body);
      res.status(201).json(todoist);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const todoists = await todoistService.getAllTodoists();
      res.json(todoists);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
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

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const todoist = await todoistService.updateTodoist(req.params.id, req.body);
      if (!todoist) {
        res.status(404).json({ message: 'Todoist not found' });
        return;
      }

      res.json(todoist);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
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
