class LowercaseAndUppercaseValidator {
	execute(password: string): boolean {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		let hasLower = false;
		let hasUpper = false;
		const arrPassword = password.split("");

		arrPassword.forEach((character) => {
			if (
				character.toLowerCase() === character &&
				!SPECIAL_CHARACTERS.includes(character)
			) {
				hasLower = true;
			}

			if (
				character.toUpperCase() === character &&
				!SPECIAL_CHARACTERS.includes(character)
			) {
				hasUpper = true;
			}
		});

		if (!(hasLower && hasUpper)) {
			return true;
		}

		return false;
	}
}

export { LowercaseAndUppercaseValidator };
