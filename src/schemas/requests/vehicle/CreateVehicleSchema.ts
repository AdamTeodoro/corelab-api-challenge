import Joi from "joi";

import { VehicleSchema } from "../../objects/VehicleSchema";
import { HeaderSchema } from "../../objects/HeaderSchema";

export const CreateVehicleSchema = Joi.object({
	headers: HeaderSchema,
	body: Joi.object({
		vehicle: VehicleSchema.required(),
	}).unknown(false).required()
}).unknown(true);
