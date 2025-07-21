import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { eventControllers } from './event.controllers';

import { eventeValidation } from './event.validation';

const router = Router();

//Create Event Scheduler
router.post(
  '/create',
  validateRequest(eventeValidation.eventValidationSchema),
  eventControllers.createEvent,
);

//Delete Event Scheduler
router.delete('/delete/:id', eventControllers.deleteEvent);

//Updated Event Scheduler
router.patch('/update/:id', eventControllers.updatedEvent);

//get All Events
router.get('/get', eventControllers.getAllEvent);

//archived Scheduler
router.put('/archived/:id', eventControllers.archivedEvent);

export const eventRoutes = router;
