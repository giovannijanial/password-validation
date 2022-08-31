class SequenceValidator {
	static execute(password: string): boolean {
		const lowercasePassword = password.toLocaleLowerCase();
		const arrPassword = lowercasePassword.split("");
		let hasSequence = false;

		for (let i = 0; i < arrPassword.length; i++) {
			if (
				String.fromCharCode(arrPassword[i].charCodeAt(0) + 1) ===
					arrPassword[i + 1] &&
				String.fromCharCode(arrPassword[i].charCodeAt(0) + 2) ===
					arrPassword[i + 2]
			) {
				hasSequence = true;
			}
		}

		if (hasSequence) {
			return true;
		}

		return false;
	}
}

export { SequenceValidator };
