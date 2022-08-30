import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const CreateFavoriteSchema = Joi.object({
	headers: HeaderSchema,
	body: Joi.object({
		idVehicle: Joi.number()
		.integer()
		.min(1)
		.max(9999999999999)
		.required()
	}).unknown(false).required()
}).unknown(true);
