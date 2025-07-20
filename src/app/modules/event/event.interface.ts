export type EventCategory = 'Work' | 'Personal' | 'Other';
export interface IEvent {
  id?: string;
  title: string;
  date: Date;
  time: string;
  notes?: string;
  archived: boolean;
  category?: EventCategory;
}
