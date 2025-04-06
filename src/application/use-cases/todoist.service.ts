import { ITodoist } from '../../domain/entities/todoist.model';
import { ITodoistService } from '../../domain/interfaces/services/interface.todoist.service';
import { ITodoistRepository } from '../../domain/interfaces/repositories/interface.todoist.repository';
import { CreateTodoistDTO, UpdateTodoistDTO } from '../../domain/dto/todoist.dto';
import { TodoistRepository } from '../../infrastructure/database/repositories/todoist.repository';

export class TodoistService implements ITodoistService {
  private readonly todoistRepository: ITodoistRepository;

  constructor(todoistRepository?: ITodoistRepository) {
    this.todoistRepository = todoistRepository ?? new TodoistRepository();
  }

  async createTodoist(data: CreateTodoistDTO): Promise<ITodoist> {
    return this.todoistRepository.create(data);
  }

  async getAllTodoists(): Promise<ITodoist[]> {
    return this.todoistRepository.findAll();
  }

  async getTodoistById(id: string): Promise<ITodoist | null> {
    try {
      return await this.todoistRepository.findById(id);
    } catch (error) {
      // Retorna null se não encontrado (mantendo a assinatura original)
      return null;
    }
  }

  async updateTodoist(id: string, data: UpdateTodoistDTO): Promise<ITodoist | null> {
    try {
      return await this.todoistRepository.update(id, data);
    } catch (error) {
      return null;
    }
  }

  async deleteTodoist(id: string): Promise<ITodoist | null> {
    try {
      const todo = await this.todoistRepository.findById(id);
      await this.todoistRepository.delete(id);
      return todo;
    } catch (error) {
      return null;
    }
  }
}
