import { Router } from 'express';
import OrphanagesCOntroller from './controllers/OrphanagesCOntroller';

const routes = Router();


routes.post('/orphanages', OrphanagesCOntroller.create)

export default routes;