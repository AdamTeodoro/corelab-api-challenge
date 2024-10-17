import { Response } from "express";

import { vehicleModel } from "../../database/models/Vehicle.model";

type Request = {
	headers: {
		authorization?: string,
	},
	idSession?: number
}

export const listMyVehiclesController = async (req: Request, res: Response) => {
	try {
		const idSession = req.idSession as number;
		const myVehicles = await vehicleModel.findAll({
			where: {
				idSession
			}
		});
		res.status(200)
			.json({
				code: 'success-to-get-vehicles',
				myVehicles
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
