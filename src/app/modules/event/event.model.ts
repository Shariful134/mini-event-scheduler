import mongoose, { Schema, model, Types } from 'mongoose';
import { IEvent } from './event.interface';

const eventScheduleSchema = new Schema<IEvent>(
  {
    id: { Type: String },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    notes: { type: String },
    archived: { type: Boolean, default: false },
    category: {
      type: String,
      enum: ['Work', 'Personal', 'Other'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Event = model<IEvent>('Event', eventScheduleSchema);
