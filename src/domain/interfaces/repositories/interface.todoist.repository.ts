import { ITodoist } from '../../entities/todoist.model';
import { CreateTodoistDTO, UpdateTodoistDTO } from '../../dto/todoist.dto';

export interface ITodoistRepository {
    create(data: CreateTodoistDTO): Promise<ITodoist>;
    findById(id: string): Promise<ITodoist>;
    findAll(): Promise<ITodoist[]>;
    update(id: string, data: UpdateTodoistDTO): Promise<ITodoist | null>;
    delete(id: string): Promise<void>;
}
