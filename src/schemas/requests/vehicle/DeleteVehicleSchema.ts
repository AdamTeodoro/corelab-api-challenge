import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const DeleteVehicleSchema = Joi.object({
	headers: HeaderSchema,
	query: Joi.object({
		idVehicle: Joi.number()
			.integer()
			.min(1)
			.max(9999999999999)
			.required()
	})
}).unknown(true);
