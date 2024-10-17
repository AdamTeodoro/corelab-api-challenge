import { Response } from "express";
import { Op } from "sequelize";

import { vehicleModel } from "../../database/models/Vehicle.model";

import { arrayManager }  from "../../classes/ArrayManager";

import { IVehicle } from "../../interfaces/IVehicle";

type Request = {
	body: {
		query?: string,
		queryForm?: {
			brand: string,
			color: string,
			year: string,
			minPrice: number,
			maxPrice: number
		}
	}
}
export const searchVehicleController = async (req: Request, res: Response) => {
	try {
		const { query, queryForm } = req.body;
		const vehiclesFindeds: Array<IVehicle> = [];
		if (queryForm) {
			const vehicles = await vehicleModel.findAll({
				where: {
					brand: queryForm.brand,
					color: queryForm.color,
					price: {
						[Op.between]: [queryForm.minPrice, queryForm.maxPrice]
					},
				}
			});
			arrayManager.copyArrayIfNotExists(vehiclesFindeds, vehicles);
		} else if (query) {
			//separates the words in the query
			const querySplit = query.split(' ');
			//search data by work
			const promiseSearchList = querySplit.map((querySplited) => {
				const findedWork = '%' + querySplited + '%';
				return vehicleModel.findAll({
					where: {
						[Op.or]: [
							{
								name: {
									[Op.iLike]: findedWork,
								},
							},
							{
								brand: {
									[Op.iLike]: findedWork,
								},
							},
							{
								color: {
									[Op.iLike]: findedWork,
								},
							},
							{
								year: {
									[Op.iLike]: findedWork,
								},
							}
						]
					}
				});
			});
			const queryVehicles = await Promise.all(promiseSearchList);
			queryVehicles.map(vehicles => {
				arrayManager.copyArrayIfNotExists(vehiclesFindeds, vehicles);
			});
			const findedByDescription = await vehicleModel.findAll({
				where: {
					description: {
						[Op.iLike]: '%' + query + '%',
					}
				}
			});
			arrayManager.copyArrayIfNotExists(vehiclesFindeds, findedByDescription)
		}
		res.status(200)
			.json({ code: 'success-to-search-veicles',  vehiclesFindeds })
			.end();
		return;
	} catch(error) {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
