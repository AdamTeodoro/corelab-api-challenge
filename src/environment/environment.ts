
import path from 'path';

export class Environment {

	private prodPath: string = path.resolve('src', 'environment', 'config') + '/prod.env';
	private devPath: string = path.resolve('src', 'environment', 'config') + '/dev.env';

	constructor(
		private isProduction: boolean,
		private dotEnv: any
	) { }

	private getProd(): any {
		return this.dotEnv.config({ path:  this.prodPath }).parsed;
	}

	private getDev(): any {
		return this.dotEnv.config({ path: this.devPath }).parsed;
	}

	get() {
		if (this.isProduction) {
			return this.getProd();
		} else {
			return this.getDev();
		}
	}
}
