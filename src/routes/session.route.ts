import { Router } from "express";

import { createSessionController } from "../controllers/session/createSessionController";

const sessionRoute = Router();

sessionRoute.post(
	'/session',
	createSessionController,
);

export { sessionRoute };
