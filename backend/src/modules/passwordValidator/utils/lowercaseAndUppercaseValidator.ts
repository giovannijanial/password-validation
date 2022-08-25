class LowercaseAndUppercaseValidator {
	execute(password: string, objResult: IResult): IResult {
		let hasLower = false;
		let hasUpper = false;
		const arrPassword = password.split("");

		arrPassword.forEach((character) => {
			if (character.toLowerCase() === character) {
				hasLower = true;
			}
		});

		arrPassword.forEach((character) => {
			if (character.toLowerCase() === character) {
				hasUpper = true;
			}
		});

		if (!hasLower && !hasUpper) {
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}

		return objResult;
	}
}

export { LowercaseAndUppercaseValidator };
