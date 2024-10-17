import { Response } from "express";

import { favoriteModel } from "../../database/models/Favorite.model";

type Request = {
	headers: {
		authorization?: string,
	},
	idSession?: number,
}

export const listFavoritesController = async (req: Request, res: Response) => {
	try {
		const idSession = req.idSession as number;
		const favoriteList = await favoriteModel.findAll({
			where: {
				idSession
			}
		});
		res.status(200)
			.json({
				code: 'success-to-list-favorites', 
				favoriteList
			})
			.end();
		return;
	} catch {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
