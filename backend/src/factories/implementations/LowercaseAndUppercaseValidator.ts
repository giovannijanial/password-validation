import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class LowercaseAndUppercaseValidator implements IPasswordValidatorFactory {
	execute(password: string): string {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		const arrPassword = password
			.split("")
			.filter((character) => !SPECIAL_CHARACTERS.includes(character));

		const hasLower = arrPassword.some(
			(character) => character.toLowerCase() === character
		);
		const hasUpper = arrPassword.some(
			(character) => character.toUpperCase() === character
		);

		if (!(hasLower && hasUpper))
			return "Password must contain uppercase and lowercase letters";
		return "";
	}
}

export { LowercaseAndUppercaseValidator };
