import { Response } from "express";

import { VehicleData, vehicleModel } from "../../database/models/Vehicle.model";

type Request = {
	headers: {
		authorization?: string,
	},
	body: {
		vehicle: VehicleData
	},
	idSession?: number
};

export const createVehicleController = async (req: Request, res: Response) => {
	try {
		const vehicle = req.body.vehicle;
		vehicle.idSession = req.idSession as number;
		const newVehicle = await vehicleModel.create(vehicle);
		res.status(200)
			.json({
				code: 'success-to-create-vehicle',
				newVehicle
			})
			.end();
		return;
	} catch  {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
