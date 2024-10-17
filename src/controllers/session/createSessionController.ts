import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import { sessionModel } from "../../database/models/Session.model";

import { hashGenerator } from "../../classes/HashGenerator";

export const createSessionController = async (req: Request, res: Response) => {
	try {
		const token = await hashGenerator.generateHash();
		const newSession = await sessionModel.create({ token });
		const authorization = jwt.sign({ id: newSession.id }, token);
		res.status(200)
			.json({
				code: 'success-to-get-session',
				session: {
					id: newSession.id,
					authorization,
				}
			})
			.end();
		return;
	} catch {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
