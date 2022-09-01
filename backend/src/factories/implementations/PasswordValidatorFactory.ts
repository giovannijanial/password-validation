import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

export class PasswordValidatorFactory implements IPasswordValidatorFactory {
	lowercaseAndUppercaseCharacters(password: string): boolean {
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

		return !(hasLower && hasUpper);
	}

	sequenceCharacters(password: string): boolean {
		const arrPassword = password.toLowerCase().split("");

		return arrPassword.some(
			(character, index) =>
				String.fromCharCode(character.charCodeAt(0) + 1) ===
					arrPassword[index + 1] &&
				String.fromCharCode(character.charCodeAt(0) + 2) ===
					arrPassword[index + 2]
		);
	}

	sizePassword(
		password: string,
		minSize: number = 0,
		maxSize: number = 10
	): boolean {
		const arrPassword = password.split("");
		return arrPassword.length < minSize || arrPassword.length > maxSize;
	}

	spaceCharacter(password: string): boolean {
		return password.includes(" ");
	}

	specialCharacters(password: string): boolean {
		const SPECIAL_CHARACTERS = "!@#$%^&*()_+=-{}[];',./:<>?";
		const arrPassword = password.split("");

		const arrSpecial = arrPassword.filter((character) =>
			SPECIAL_CHARACTERS.includes(character)
		);

		return arrSpecial.length < 2;
	}
}
