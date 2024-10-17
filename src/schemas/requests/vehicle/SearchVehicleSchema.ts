import Joi from "joi";

import { HeaderSchema } from "../../objects/HeaderSchema";

export const SearchVehicleSchema = Joi.object({
	headers: HeaderSchema,
	body: Joi.object({
		query: Joi.string()
			.min(1)
			.max(500),
		
		queryForm: Joi.object({
			brand: Joi.string()
				.min(1)
				.max(256)
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
	
			minPrice: Joi.number()
				.min(0)
				.max(9999999999999)
				.required(),
	
			maxPrice: Joi.number()
				.min(0)
				.max(9999999999999)
				.required(),
		})
	
	}).or('queryForm', 'query')
		.unknown(false)
		.required()
}).unknown(true);
