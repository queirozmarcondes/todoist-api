import { ITodoist } from '../../../domain/entities/todoist.model';
import { Todoist } from '../schemas/todoist.model';
import { CreateTodoistDTO, UpdateTodoistDTO } from '../../../domain/dto/todoist.dto';
import { ITodoistRepository } from '../../../domain/interfaces/repositories/interface.todoist.repository';
import logger from '../../logger/winston.setup';

class TodoistNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TodoistNotFoundError';
    }
}

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class TodoistRepository implements ITodoistRepository {
    async create(data: CreateTodoistDTO): Promise<ITodoist> {
        try {
            if (!data.description) {
                throw new ValidationError('Description is required');
            }

            const todo = new Todoist(data);
            await todo.save();
            return todo;
        } catch (error) {
            logger.error(`Failed to create todo: ${error instanceof Error ? error.message : error}`);
            throw error;
        }
    }

    async findById(id: string): Promise<ITodoist> {
        try {
            const todo = await Todoist.findById(id);
            if (!todo) {
                throw new TodoistNotFoundError(`Todo with ID ${id} not found`);
            }
            return todo;
        } catch (error) {
            logger.error(`Failed to find todo by ID: ${error instanceof Error ? error.message : error}`);
            throw error;
        }
    }

    async findAll(): Promise<ITodoist[]> {
        try {
            return await Todoist.find().lean();
        } catch (error) {
            logger.error(`Failed to list todos: ${error instanceof Error ? error.message : error}`);
            throw error;
        }
    }

    async update(id: string, data: UpdateTodoistDTO): Promise<ITodoist | null> {
        try {
            const todo = await Todoist.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            if (!todo) {
                throw new TodoistNotFoundError(`Todo with ID ${id} not found`);
            }
            return todo;
        } catch (error) {
            logger.error(`Failed to update todo: ${error instanceof Error ? error.message : error}`);
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const todo = await Todoist.findByIdAndDelete(id);
            if (!todo) {
                throw new TodoistNotFoundError(`Todo with ID ${id} not found`);
            }
        } catch (error) {
            logger.error(`Failed to delete todo: ${error instanceof Error ? error.message : error}`);
            throw error;
        }
    }
}
