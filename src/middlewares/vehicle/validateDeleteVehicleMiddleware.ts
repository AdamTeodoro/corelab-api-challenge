import { NextFunction, Response } from "express";

import { DeleteVehicleSchema } from "../../schemas/requests/vehicle/DeleteVehicleSchema";

type Request = {
	headers: {
		authorization?: string,
	}
	idSession?: number
}

export const validateDeleteVehicleMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = DeleteVehicleSchema.validate(req);
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