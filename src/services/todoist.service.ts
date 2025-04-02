import { Todoist, ITodoist } from '../model/todoist.model';

export class TodoistService {
  async createTodoist(data: Partial<ITodoist>): Promise<ITodoist> {
    const todoist = new Todoist(data);
    return todoist.save();
  }

  async getAllTodoists(): Promise<ITodoist[]> {
    return Todoist.find().lean();
  }

  async getTodoistById(id: string): Promise<ITodoist | null> {
    return Todoist.findById(id).lean();
  }

  async updateTodoist(id: string, data: Partial<ITodoist>): Promise<ITodoist | null> {
    return Todoist.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
  }

  async deleteTodoist(id: string): Promise<ITodoist | null> {
    return Todoist.findOneAndDelete({ _id: id }).lean();
  }
}
