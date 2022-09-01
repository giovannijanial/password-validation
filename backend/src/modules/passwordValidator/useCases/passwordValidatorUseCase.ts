import { AppError } from "../../../errors/AppError";
import { IPasswordValidatorFactory } from "../../../factories/IPasswordValidatorFactory";

class PasswordValidatorUseCase {
	constructor(private passwordValidatorFactory: IPasswordValidatorFactory) {}

	execute(password: string): IResult {
		let objResult: IResult = { result: true, errors: [] };

		if (this.passwordValidatorFactory.sizePassword(password, 16, 36)) {
			objResult.errors.push("Invalid password size");
		}

		if (this.passwordValidatorFactory.specialCharacters(password)) {
			objResult.errors.push(
				"Password must contain at least 2 special characters"
			);
		}
		if (
			this.passwordValidatorFactory.lowercaseAndUppercaseCharacters(password)
		) {
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}
		if (this.passwordValidatorFactory.sequenceCharacters(password)) {
			objResult.errors.push(
				"Password cannot contain more than 3 sequence of characters, letters or numbers"
			);
		}
		if (this.passwordValidatorFactory.spaceCharacter(password)) {
			objResult.errors.push("Password cannot contain spaces");
		}

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
