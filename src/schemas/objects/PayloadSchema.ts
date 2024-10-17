import Joi from "joi";

export const PayloadSchema =  Joi.object({
	id: Joi.number().integer()
		.min(1)
		.max(9999999999999)
		.required(),
	
	iat: Joi.number().integer()
		.min(1)
		.max(9999999999999)
		.required()
});
