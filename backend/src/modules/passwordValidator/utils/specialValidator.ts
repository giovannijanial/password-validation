class SpecialCharactersValidator {
	static execute(password: string): boolean {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		const arrPassword = password.split("");

		const arrSpecial = arrPassword.filter((character) =>
			SPECIAL_CHARACTERS.includes(character)
		);

		if (arrSpecial.length < 2) {
			return true;
		}
		return false;
	}
}

export { SpecialCharactersValidator };
