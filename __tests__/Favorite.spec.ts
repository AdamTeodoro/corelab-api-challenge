
import { createFavoriteController } from "../src/controllers/favorite/createFavoriteController";
import { deleteFavoriteController } from "../src/controllers/favorite/deleteFavoriteController";

describe("Favorite collection tests", () => {
	
	it("should be valid favorite to delete", async () => {
		type Request = {
			query: {
				idFavorite?: number
			},
			idSession?: number
		};	
		const req: Request = {
			query: {
				idFavorite: 0
			},
			idSession: 999
		}
		const res: any = {
			status: (statusCode: number) => {
				expect(statusCode).toBe(400)
				return res;
			},
			json: (object: any) => {
				expect(object.code).toBe('invalid-favorite')
				return res;
			},
			end: () => {}
		};
		await deleteFavoriteController(req, res);
	});

	it('should be an favorite per car per user', async () => {
		type Request = {
			body: {
				idVehicle: number
			},
			idSession?: number
		};
		const req: Request = {
			body: {
				idVehicle: 37
			},
			idSession: 50
		};
		const res: any = {
			status: (statusCode: number) => {
				expect(statusCode).toBe(400)
				return res;
			},
			json: (object: any) => {
				expect(object.code).toBe('favorite-already-exists')
				return res;
			},
			end: () => {}
		};
		await createFavoriteController(req, res);
	});

	it('should be favorited only existing vehicles', async () => {
		type Request = {
			body: {
				idVehicle: number
			},
			idSession?: number
		};
		const req: Request = {
			body: {
				idVehicle: 0
			},
			idSession: 50
		};
		const res: any = {
			status: (statusCode: number) => {
				expect(statusCode).toBe(400)
				return res;
			},
			json: (object: any) => {
				expect(object.code).toBe('invalid-request-vehicle')
				return res;
			},
			end: () => {}
		};
		await createFavoriteController(req, res);
	});
	
});
