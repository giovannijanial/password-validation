import { AppError } from "../../../errors/AppError";
import { LowercaseAndUppercaseValidator } from "../utils/lowercaseAndUppercaseValidator";
import { SequenceValidator } from "../utils/sequenceValidator";
import { SizeValidator } from "../utils/sizeValidator";
import { SpaceValidator } from "../utils/spaceValidator";
import { SpecialCharactersValidator } from "../utils/specialValidator";

class PasswordValidatorUseCase {
	execute(password: string): IResult {
		let objResult: IResult = { result: true, errors: [] };

		if (SizeValidator.execute(password)) {
			objResult.errors.push("Invalid password size");
		}
		if (SpecialCharactersValidator.execute(password)) {
			objResult.errors.push(
				"Password must contain at least 2 special characters"
			);
		}
		if (LowercaseAndUppercaseValidator.execute(password)) {
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}
		if (SequenceValidator.execute(password)) {
			objResult.errors.push(
				"Password cannot contain more than 3 sequence of characters, letters or numbers"
			);
		}
		if (SpaceValidator.execute(password)) {
			objResult.errors.push("Password cannot contain spaces");
		}

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
