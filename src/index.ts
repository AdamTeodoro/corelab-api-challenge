import 'reflect-metadata';

import express from 'express';
import cors, { CorsOptions } from 'cors';

import { vehicleRoute } from './routes/vehicle.route';
import { sessionRoute } from './routes/session.route';
import { favoriteRoute } from './routes/favorite.route';

const app = express();
const corsConfig: CorsOptions = {
  origin(requestOrigin, callback) {
		callback(null, 'http://localhost:3000') 
	},
  optionsSuccessStatus: 200,
	methods: [ '*' ]
}
app.use(express.json());
app.use(cors(corsConfig))
app.use(vehicleRoute);
app.use(sessionRoute);
app.use(favoriteRoute);

app.listen(3333, () => console.log('Its running in: http://localhost:3333'));
	