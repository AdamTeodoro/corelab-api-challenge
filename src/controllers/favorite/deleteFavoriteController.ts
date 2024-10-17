import { Response } from "express";

import { favoriteModel } from "../../database/models/Favorite.model";

type Request = {
	query: {
		idFavorite?: number
	},
	idSession?: number
};

export const deleteFavoriteController = async (req: Request, res: Response) => {
	try {
		const idFavorite = req.query.idFavorite as number;
		const idSession = req.idSession as number;
		const refFavorite = await favoriteModel.findOne({
			where: {
				id: idFavorite,
				idSession
			}
		});
		if (!refFavorite) {
			res.status(400)
				.json({ code: 'invalid-favorite' })
				.end();
			return;
		}
		await refFavorite.destroy();
		res.status(200)
			.json({ code: 'success-to-delete' })
			.end();
		return;
	} catch {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
