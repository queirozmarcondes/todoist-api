import mongoose, { Schema } from 'mongoose';
import { ITodoist } from '../../../domain/entities/todoist.model';


const TodoistSchema = new Schema<ITodoist>(
  {
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todoist = mongoose.model<ITodoist>('Todoist', TodoistSchema);
