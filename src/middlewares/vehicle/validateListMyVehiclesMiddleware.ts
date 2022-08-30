import { NextFunction, Response } from "express";

import { ListMyVehiclesSchema } from "../../schemas/requests/vehicle/ListMyVehiclesSchema";

type Request = {
	headers: {
		authorization?: string
	},
	idSession?: number
}

export const validateListMyVehiclesMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = ListMyVehiclesSchema.validate(req)
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
