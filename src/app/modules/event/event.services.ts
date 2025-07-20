import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { categorizeEvent } from '../../utils/categorizeEvent';
import { EventCategory, IEvent } from './event.interface';
import { Event } from './event.model';
import { uuid } from 'uuidv4';

let events: IEvent[] = [];

// CreateEvent
const createEventIntoDB = async (payload: IEvent) => {
  const category: EventCategory = categorizeEvent(
    payload?.title,
    payload?.notes,
  );

  const newEvent: IEvent = {
    ...payload,
    category: category,
    id: uuid(),
  };

  events.push(newEvent);
  return events;
};

// Delete Event
const deleteEventIntoDB = async (id: string) => {
  const index = events.findIndex((e) => e.id === id);
  console.log(index);

  if (index === -1) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Event not Found!');
  }

  events.splice(index, 1);
  return;
};

// update Event
const updateEventIntoDB = async (id: string, payload: Record<string, any>) => {
  const index = events.findIndex((e) => e.id === id);
  console.log(index);

  if (index === -1) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Event not Found!');
  }

  events[index] = {
    ...events[index],
    ...payload,
  };

  return events[index];
};

// Get ALl Event
const getAllEventIntoDB = async () => {
  const sorted = events.sort((a, b) => {
    const aDate = new Date(`${a.date} ${a.time}`);
    const bDate = new Date(`${b.date} ${b.time}`);
    return aDate.getTime() - bDate.getTime();
  });
  return sorted;
};

// Get acrhived Event
const archivedEventIntoDB = async (id: string) => {
  const event = events.find((e) => e.id === id);
  if (!event) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Event not Found!');
  }

  event.archived = true;
  return event;
};

export const eventServices = {
  createEventIntoDB,
  deleteEventIntoDB,
  updateEventIntoDB,
  getAllEventIntoDB,
  archivedEventIntoDB,
};
