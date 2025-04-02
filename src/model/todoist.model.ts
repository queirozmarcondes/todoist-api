import mongoose, { Schema, Document } from 'mongoose';

export interface ITodoist extends Document {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TodoistSchema = new Schema<ITodoist>(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todoist = mongoose.model<ITodoist>('Todoist', TodoistSchema);
