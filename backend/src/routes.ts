import { Router } from 'express';
import OrphanagesCOntroller from './controllers/OrphanagesCOntroller';

const routes = Router();

routes.get('/orphanages', OrphanagesCOntroller.index);
routes.get('/orphanages/:id', OrphanagesCOntroller.show);
routes.post('/orphanages', OrphanagesCOntroller.create);

export default routes;