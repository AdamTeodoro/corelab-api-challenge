
import { Router } from "express";

import { createFavoriteController } from "../controllers/favorite/createFavoriteController";
import { deleteFavoriteController } from "../controllers/favorite/deleteFavoriteController";
import { listFavoritesController } from "../controllers/favorite/listFavoritesController";

import { validateCreateFavoriteMiddleware } from "../middlewares/favorite/validateCreateFavoriteMiddleware";
import { validateDeleteFavoriteMiddleware } from "../middlewares/favorite/validateDeleteFavoriteMiddleware";
import { validateSessionMiddleware } from "../middlewares/validateSessionMiddleware";
import { validateListFavoritesMiddleware } from "../middlewares/favorite/validateListFavoritesMiddleware";

const favoriteRoute = Router();

favoriteRoute.post(
	'/favorite',
	validateCreateFavoriteMiddleware,
	validateSessionMiddleware,
	createFavoriteController,
);

favoriteRoute.delete(
	'/favorite',
	validateDeleteFavoriteMiddleware,
	validateSessionMiddleware,
	deleteFavoriteController,
);

favoriteRoute.get(
	'/favorite/my',
	validateListFavoritesMiddleware,
	validateSessionMiddleware,
	listFavoritesController,
);

export { favoriteRoute };
