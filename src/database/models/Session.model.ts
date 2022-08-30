import { Sequelize, DataTypes, BuildOptions, Model } from "sequelize";

import { ISession } from "../../interfaces/ISession";

import { db } from "../database";

export type SessionModel = typeof Model & {
  new (values?: Partial<ISession>, options?: BuildOptions): ISession
}

function build(sequelize: Sequelize) {
	return sequelize.define("Session", {
		token: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, { tableName: "Sessions", timestamps: false }) as SessionModel;
}

export type SessionData = {
	token: string;
}

export type RequestSession = {
	id: number;
	authorization: string;
}

export const sessionModel = build(db);
