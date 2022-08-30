import * as Joi from "joi";

export const VehicleSchema = Joi.object({
	
	name: Joi.string()
	.min(1)
	.max(256)
	.trim()
	.required(),

	brand: Joi.string()
	.min(1)
	.max(256)
	.trim()
	.required(),

	color: Joi.string()
	.min(1)
	.max(256)
	.trim()
	.required(),
	
	year: Joi.string()
	.min(3)
	.max(256)
	.trim()
	.required(),

	plate: Joi.string()
	.min(1)
	.max(256)
	.trim()
	.required(),

	description: Joi.string()
	.min(1)
	.max(500)
	.trim()
	.required(),

	price: Joi.number()
	.min(1)
	.max(99999999999)
	.required()

}).unknown(false);
