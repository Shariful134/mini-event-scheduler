import { EventCategory } from '../modules/event/event.interface';

export const categorizeEvent = (
  title: string,
  notes?: string,
): EventCategory => {
  const text = `${title} ${notes || ''}`.toLowerCase();

  const workKeywords = ['meeting', 'project', 'client'];
  const personalKeywords = ['birthday', 'family', 'anniversary'];

  if (workKeywords.some((keyword) => text.includes(keyword))) return 'Work';
  if (personalKeywords.some((keyword) => text.includes(keyword)))
    return 'Personal';

  return 'Other';
};
