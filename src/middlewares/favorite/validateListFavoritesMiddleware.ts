import { NextFunction, Response } from "express";

import { ListFavoritesSchema } from "../../schemas/requests/favorite/ListFavoritesSchema";

type Request = {
	headers: {
		authorization?: string
	},
	idSession?: number
}

export const validateListFavoritesMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const { error } = ListFavoritesSchema.validate(req)
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
