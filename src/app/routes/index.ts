import { Router } from 'express';
import { eventRoutes } from '../modules/event/event.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/events',
    route: eventRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
