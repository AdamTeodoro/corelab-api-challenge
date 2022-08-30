import { NextFunction, Response } from "express";

import { VehicleData } from "../../database/models/Vehicle.model";

import { CreateVehicleSchema } from "../../schemas/requests/vehicle/CreateVehicleSchema";

type Request = {
	headers: {
		authorization?: string,
	},
	body: {
		vehicle: VehicleData,
	}
}

export const validateCreateVehicleMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = CreateVehicleSchema.validate(req);
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
