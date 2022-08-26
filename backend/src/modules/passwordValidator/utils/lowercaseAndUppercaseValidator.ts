class LowercaseAndUppercaseValidator {
	execute(password: string, objResult: IResult): IResult {
		let hasLower = false;
		let hasUpper = false;
		const arrPassword = password.split("");

		arrPassword.forEach((character) => {
			if (character.toLowerCase() === character) {
				hasLower = true;
			}

			if (character.toUpperCase() === character) {
				hasUpper = true;
			}
		});

		if (!(hasLower && hasUpper)) {
			objResult.result = false;
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}

		return objResult;
	}
}

export { LowercaseAndUppercaseValidator };
