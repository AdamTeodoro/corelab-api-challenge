import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

import { sessionModel } from '../database/models/Session.model';

import { PayloadSchema } from '../schemas/objects/PayloadSchema';

type Request = {
	headers: {
		authorization?: string
	},
	idSession?: number
}

export const validateSessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const authorization = req.headers.authorization as string;
		const { error, value } = PayloadSchema.validate(jwt.decode(authorization));
		if (error) {
			res.status(400)
				.json({ code: 'invalid-payload' })
				.end();
			return;
		}
		const payload = value as JwtPayload;
		const refSession = await sessionModel.findByPk(payload.id);
		if (!refSession) {
			res.status(404)
				.json({ code: 'session-not-found' })
				.end();
				return;
		}
		jwt.verify(authorization, refSession.token, async (error, decoded) => {
			if (error) {
				res.status(403)
					.json({ code: 'invalid-authorization' })
					.end();
				return;
			}
			req.idSession = refSession.id
			next();
			return;
		});
	} catch(error) {
		res.status(500)
			.json({ code: 'unknow-error' })
			.end();
		return;
	}
}
