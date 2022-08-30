import { NextFunction, Response } from "express";

import { SearchVehicleSchema } from "../../schemas/requests/vehicle/SearchVehicleSchema";

type Request = {
	body: {
		query?: string,
		queryForm?: {
			brand: string,
			color: string,
			year: string,
			minPrice: number,
			maxPrice: number
		}
	}
}

export const validateSearchVehicleMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = SearchVehicleSchema.validate(req);
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
	} catch(error) {
		console.log(error);
		res.status(500)
		.json({ code: 'unknow-error' })
		.end();
		return;
	}
}
