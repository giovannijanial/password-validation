import { AppError } from "../../../errors/AppError";
import {
	LowercaseAndUppercaseValidator,
	SequenceCharactersValidator,
	SizeValidator,
	SpaceValidator,
	SpecialCharactersValidator,
} from "../../../factories/implementations/Index";

class PasswordValidatorUseCase {
	constructor(
		private lowercaseAndUppercaseValidator: LowercaseAndUppercaseValidator,
		private sequenceCharactersValidator: SequenceCharactersValidator,
		private sizeValidator: SizeValidator,
		private specialCharactersValidator: SpecialCharactersValidator,
		private spaceValidator: SpaceValidator
	) {}

	execute(password: string): IResult {
		let objResult: IResult = { result: true, errors: [] };

		if (this.sizeValidator.execute(password, 16, 36)) {
			objResult.errors.push("Invalid password size");
		}

		if (this.specialCharactersValidator.execute(password)) {
			objResult.errors.push(
				"Password must contain at least 2 special characters"
			);
		}
		if (this.lowercaseAndUppercaseValidator.execute(password)) {
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}
		if (this.sequenceCharactersValidator.execute(password)) {
			objResult.errors.push(
				"Password cannot contain more than 3 sequence of characters, letters or numbers"
			);
		}
		if (this.spaceValidator.execute(password)) {
			objResult.errors.push("Password cannot contain spaces");
		}

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
