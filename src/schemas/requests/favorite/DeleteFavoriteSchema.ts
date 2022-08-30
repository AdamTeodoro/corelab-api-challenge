import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const DeleteFavoriteSchema = Joi.object({
	headers: HeaderSchema,
	query: Joi.object({
		idFavorite: Joi.number()
		.integer()
		.min(1)
		.max(9999999999999)
		.required()
	}).unknown(false).required()
}).unknown(true);
