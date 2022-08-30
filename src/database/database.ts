import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

import { Environment } from '../environment/environment';

const environment = new Environment(true, dotenv);

export const db = new Sequelize({
	dialect: environment.get().DB_DIALECT,
	database: environment.get().DB_NAME,
	host: environment.get().DB_HOST,
	username: environment.get().DB_USER,
	password: environment.get().DB_PASS,
	port: Number(environment.get().DB_PORT),
});
