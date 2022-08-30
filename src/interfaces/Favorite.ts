import { Model } from "sequelize";

export interface IFavorite extends Model {
	id: number;
	idSession: number;
	idVehicle: number;
}
