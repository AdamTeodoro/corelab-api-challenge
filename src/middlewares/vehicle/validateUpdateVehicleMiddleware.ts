import { NextFunction, Response } from "express";

import { VehicleData } from "../../database/models/Vehicle.model";

import { UpdateVehicleSchema } from "../../schemas/requests/vehicle/UpdateVehicleSchema";

type Request = {
	headers: {
		authorization?: string,
	},
	body: {
		vehicle: VehicleData,
	},
	idSession?: number
}

export const validateUpdateVehicleMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = UpdateVehicleSchema.validate(req);
		if (error) {
			res.status(400)
				.json({
					code: 'invalid-request-data',
					error: error.details
				})
				.end();
			return;
		}
		next();
		return;
	} catch {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
