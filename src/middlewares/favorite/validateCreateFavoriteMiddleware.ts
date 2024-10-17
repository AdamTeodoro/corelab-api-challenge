import { NextFunction, Response } from "express";

import { CreateFavoriteSchema } from "../../schemas/requests/favorite/CreateFavoriteSchema";

type Request = {
	headers: {
		authorization?: string,
	},
	body: {
		idVehicle: number;
	},
	idSession?: number;
}
export const validateCreateFavoriteMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = CreateFavoriteSchema.validate(req);
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
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
