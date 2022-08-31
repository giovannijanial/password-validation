class SizeValidator {
	static execute(password: string): boolean {
		const MIN_SIZE_PASSWORD = 16;
		const MAX_SIZE_PASSWORD = 32;
		const arrPassword = password.split("");

		if (
			arrPassword.length < MIN_SIZE_PASSWORD ||
			arrPassword.length > MAX_SIZE_PASSWORD
		) {
			return true;
		}

		return false;
	}
}

export { SizeValidator };
