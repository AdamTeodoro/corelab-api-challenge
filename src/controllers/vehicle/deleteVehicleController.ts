import { Response } from "express";

import { vehicleModel } from "../../database/models/Vehicle.model";
import { favoriteModel } from "../../database/models/Favorite.model";

type Request = {
	headers: {
		authorization?: string,
	},
	query: {
		idVehicle?: number
	},
	idSession?: number
}

export const deleteVehicleController = async (req: Request, res: Response) => {
	try {
		const idSession = req.idSession as number;
		const idVehicle = req.query.idVehicle as number;
		await favoriteModel.destroy({
			where: {
				idVehicle,
				idSession
			}
		});
		await vehicleModel.destroy({
			where: {
				id: idVehicle,
				idSession,
			}
		});
		res.status(200)
		.json({ code: 'success-to-delete-vehicle' })
		.end();
		return;
	} catch(error) {
		console.log(error)
		res.status(500)
		.json({ code: 'unknow-error' })
		.end();
		return;
	}
}
