import { Document } from 'mongoose';

export interface ITodoist extends Document {
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
