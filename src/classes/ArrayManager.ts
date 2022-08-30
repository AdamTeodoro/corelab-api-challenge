class ArrayManager {
	addIfNotInserted(array: Array<{id: number}>, data: {id: number}) {
		const dataIsNotInserted = array.findIndex(
			(element) => element.id == data.id
		) === -1? true: false;
		if (dataIsNotInserted) {
			array.push(data);
		}
		return array;
	}

	/**
	 * array1 receive datas of array2 if data not exists on array1
	 * @param array1 array any
	 * @param array2 array any
	 */
	copyArrayIfNotExists(array1: Array<{id: number}>, array2: Array<{id: number}>) {
		array2.map(data => {
			this.addIfNotInserted(array1, data);
		})
	}
}

export const arrayManager = new ArrayManager();
