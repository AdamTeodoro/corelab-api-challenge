
import Joi from "joi";

import { VehicleSchema } from "../../objects/VehicleSchema";
import { HeaderSchema } from "../../objects/HeaderSchema";

export const UpdateVehicleSchema = Joi.object({
	headers: HeaderSchema,
	
	query: Joi.object({
		idVehicle: Joi.number().integer()
			.min(1)
			.max(99999999999)
			.required()
	}).required(),

	body: Joi.object({
		vehicle: VehicleSchema.required(),
	}).required()
}).unknown(true);
