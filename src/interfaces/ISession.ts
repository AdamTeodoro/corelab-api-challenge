import { Model } from "sequelize";

export interface ISession extends Model {
	id: number;
	token: string;
}
