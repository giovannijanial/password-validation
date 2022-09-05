import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class SpecialCharactersValidator implements IPasswordValidatorFactory {
	execute(password: string): string | void {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		const arrPassword = password.split("");

		const arrSpecial = arrPassword.filter((character) =>
			SPECIAL_CHARACTERS.includes(character)
		);

		if (arrSpecial.length < 2)
			return "Password must contain at least 2 special characters";
		return;
	}
}

export { SpecialCharactersValidator };
