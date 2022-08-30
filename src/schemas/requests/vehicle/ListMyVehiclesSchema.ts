import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const ListMyVehiclesSchema = Joi.object({
	headers: HeaderSchema
}).unknown(true)
