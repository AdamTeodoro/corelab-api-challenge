import { Model } from "sequelize";

export interface IVehicle extends Model {
	id: number;
	idSession: number;
	name: string;
	brand: string;
	color: string;
	year: string;
	plate: string;
	price: number;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}
