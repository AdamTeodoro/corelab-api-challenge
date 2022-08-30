import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const ListFavoritesSchema = Joi.object({
	headers: HeaderSchema
}).unknown(true);
