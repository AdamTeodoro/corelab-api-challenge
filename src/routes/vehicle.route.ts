import { Router } from "express";

import { createVehicleController } from "../controllers/vehicle/createVehicleController";
import { listMyVehiclesController } from "../controllers/vehicle/listMyVehicleController";
import { updateVehicleController } from "../controllers/vehicle/updateVehicleController";
import { deleteVehicleController } from "../controllers/vehicle/deleteVehicleController";

import { validateCreateVehicleMiddleware } from "../middlewares/vehicle/validateCreateVehicleMiddleware";
import { validateListMyVehiclesMiddleware } from "../middlewares/vehicle/validateListMyVehiclesMiddleware";
import { validateUpdateVehicleMiddleware } from "../middlewares/vehicle/validateUpdateVehicleMiddleware";
import { validateSessionMiddleware } from "../middlewares/validateSessionMiddleware";
import { validateDeleteVehicleMiddleware } from "../middlewares/vehicle/validateDeleteVehicleMiddleware";
import { searchVehicleController } from "../controllers/vehicle/searchVehicleController";
import { validateSearchVehicleMiddleware } from "../middlewares/vehicle/validateSearchVehicleMiddleware";

const vehicleRoute = Router();

vehicleRoute.post(
	'/vehicle',
	validateCreateVehicleMiddleware,
	validateSessionMiddleware,
	createVehicleController
);

vehicleRoute.get(
	'/vehicle/my',
	validateListMyVehiclesMiddleware,
	validateSessionMiddleware,
	listMyVehiclesController,
);

vehicleRoute.put(
	'/vehicle',
	validateUpdateVehicleMiddleware,
	validateSessionMiddleware,
	updateVehicleController,
);

vehicleRoute.delete(
	'/vehicle',
	validateDeleteVehicleMiddleware,
	validateSessionMiddleware,
	deleteVehicleController,
);

vehicleRoute.post(
	'/vehicle/search',
	validateSearchVehicleMiddleware,
	validateSessionMiddleware,
	searchVehicleController
)

export { vehicleRoute };
