import * as Joi from "joi";

export const HeaderSchema = Joi.object({
	authorization: Joi.string()
	.min(1)
	.max(1000)
	.required(),

}).unknown(true).required();
