import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class SequenceCharactersValidator implements IPasswordValidatorFactory {
	execute(password: string): string | void {
		const arrPassword = password.toLowerCase().split("");

		if (
			arrPassword.some(
				(character, index) =>
					String.fromCharCode(character.charCodeAt(0) + 1) ===
						arrPassword[index + 1] &&
					String.fromCharCode(character.charCodeAt(0) + 2) ===
						arrPassword[index + 2]
			)
		)
			return "Password cannot contain more than 3 sequence of characters, letters or numbers";
		return;
	}
}

export { SequenceCharactersValidator };
