import bcrypt from 'bcrypt';

class HashGenerator {
	private chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	constructor () { }
	
	/**
	 * generate string with length default 32 
	 */
	generateHash(lengthOfHash: number = 32) {
		var str = '';
		lengthOfHash = lengthOfHash;
		for (var i = 0; i < lengthOfHash; i++) {
			str += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
		}
		return bcrypt.hash(str, 10);
	}
}

export const hashGenerator = new HashGenerator();
