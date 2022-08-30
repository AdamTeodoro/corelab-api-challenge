import { Response } from "express";

import { VehicleData, vehicleModel } from "../../database/models/Vehicle.model";

type Request = {
	headers: {
		authorization?: string,
	},
	query: {
		idVehicle: number
	},
	body: {
		vehicle: VehicleData
	},
	idSession?: number
}

export const updateVehicleController = async (req: Request, res: Response) => {
	try {
		const vehicle = req.body.vehicle;
		const refVehicle = await vehicleModel.findOne({
			where: {
				id: req.query.idVehicle,
				idSession: req.idSession
			}
		});
		if (!refVehicle) {
			res.status(400)
			.json({ code: 'invalid-request-vehicle' })
			.end();
			return;
		}
		await refVehicle.update(vehicle);
		res.status(200)
		.json({ code: 'success-to-update' })
		.end();
		return;
	} catch {
		res.status(500)
		.json({ code: 'unknow-error' })
		.end();
		return;
	}
}
