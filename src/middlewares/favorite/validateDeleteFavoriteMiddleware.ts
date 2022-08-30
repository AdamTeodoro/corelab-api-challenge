import { NextFunction, Request, Response } from "express";

import { DeleteFavoriteSchema } from "../../schemas/requests/favorite/DeleteFavoriteSchema";

export const validateDeleteFavoriteMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = DeleteFavoriteSchema.validate(req);
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
		.json({ code: 'unknow-error '})
		.end();
		return;
	}
}
