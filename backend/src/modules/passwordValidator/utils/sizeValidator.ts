class SizeValidator {
	execute(password: string, objResult: IResult): IResult {
		const MIN_SIZE_PASSWORD = 16;
		const MAX_SIZE_PASSWORD = 32;
		const arrPassword = password.split("");

		if (
			arrPassword.length < MIN_SIZE_PASSWORD ||
			arrPassword.length > MAX_SIZE_PASSWORD
		) {
			objResult.errors.push("Invalid password size");
		}

		return objResult;
	}
}

export { SizeValidator };
