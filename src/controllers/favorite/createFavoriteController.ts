import { Response } from "express";

import { vehicleModel } from "../../database/models/Vehicle.model";
import { FavoriteData, favoriteModel } from "../../database/models/Favorite.model";

type Request = {
	body: {
		idVehicle: number
	},
	idSession?: number
};

export const createFavoriteController = async (req: Request, res: Response) => {
	try {
		const refVehicle = await vehicleModel.findByPk(req.body.idVehicle)
		if (!refVehicle) {
			res.status(400)
			.json({ code: 'invalid-request-vehicle' })
			.end();
			return;
		}
		const favorite = await favoriteModel.findOne({
			where: {
				idVehicle: req.body.idVehicle,
				idSession: req.idSession
			}
		});
		if (favorite) {
			res.status(400)
			.json({ code: 'favorite-already-exists' })
			.end();
			return;
		}
		const datafavorite: FavoriteData = {
			idVehicle: req.body.idVehicle,
			idSession: req.idSession as number
		}
		const newFavorite = await favoriteModel.create(datafavorite);
		res.status(200)
		.json({
			code: 'success-to-create',
			newFavorite
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
