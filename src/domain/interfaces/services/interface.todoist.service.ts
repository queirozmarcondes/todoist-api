import { ITodoist } from '../../entities/todoist.model';

export interface ITodoistService {
    createTodoist(data: Partial<ITodoist>): Promise<ITodoist>;
    getAllTodoists(): Promise<ITodoist[]>;
    getTodoistById(id: string): Promise<ITodoist | null>;
    updateTodoist(id: string, data: Partial<ITodoist>): Promise<ITodoist | null>;
    deleteTodoist(id: string): Promise<ITodoist | null>;
}
