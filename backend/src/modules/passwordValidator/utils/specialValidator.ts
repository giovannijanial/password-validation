class SpecialCharactersValidator {
	execute(password: string, objResult: IResult): IResult {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		const arrPassword = password.split("");

		const arrSpecial = arrPassword.filter((character) =>
			SPECIAL_CHARACTERS.includes(character)
		);

		if (arrSpecial.length < 2) {
			objResult.result = false;
			objResult.errors.push(
				"Password must contain at least 2 special characters"
			);
		}
		return objResult;
	}
}

export { SpecialCharactersValidator };
