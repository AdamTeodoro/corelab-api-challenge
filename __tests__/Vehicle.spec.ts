import { updateVehicleController } from "../src/controllers/vehicle/updateVehicleController";
import { VehicleData } from "../src/database/models/Vehicle.model";

/**
 * Mantenha o banco de dados executando durante os testes
 */
describe("vehicle colection tests", () => {

	it("should be an existing vehicle to update", async () => {
		type Request = {
			headers: {
				authorization?: string,
			},
			query: {
				idVehicle: number
			},
			body: {
				vehicle: VehicleData
			},
			idSession?: number
		}
		const fakeVehicle: any = {};
		const req: Request = {
			headers: {
				authorization: 'Essa autorização é válida, confia!'
			},
			query: {
				idVehicle: 0,
			},
			body: {
				vehicle: fakeVehicle
			},
			idSession: 0
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
		await updateVehicleController(req, res);
	});

	it("shoud be owner to update", async () => {
		type Request = {
			headers: {
				authorization?: string,
			},
			query: {
				idVehicle: number
			},
			body: {
				vehicle: VehicleData
			},
			idSession?: number
		}
		const fakeVehicle: any = {};
		const req: Request = {
			headers: {
				authorization: 'Essa autorização é válida, confia!'
			},
			query: {
				idVehicle: 37,
			},
			body: {
				vehicle: fakeVehicle
			},
			idSession: 0
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
		await updateVehicleController(req, res);
	});
});
