import { AppError } from "../../../errors/AppError";
import { LowercaseAndUppercaseValidator } from "../utils/lowercaseAndUppercaseValidator";
import { SequenceValidator } from "../utils/sequenceValidator";
import { SizeValidator } from "../utils/sizeValidator";
import { SpaceValidator } from "../utils/spaceValidator";
import { SpecialCharactersValidator } from "../utils/specialValidator";

class PasswordValidatorUseCase {
	execute(password: string): IResult {
		let objResult: IResult = { result: true, errors: [] };

		const sizeValidator = new SizeValidator();
		const specialCharactersValidator = new SpecialCharactersValidator();
		const lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
		const sequenceValidator = new SequenceValidator();
		const spaceValidator = new SpaceValidator();

		if(sizeValidator.execute(password)){
			objResult.errors.push("Invalid password size");
		}
		if(specialCharactersValidator.execute(password)){
			objResult.errors.push(
				"Password must contain at least 2 special characters"
			);
		}
		if(lowercaseAndUppercaseValidator.execute(password)){
			objResult.errors.push(
				"Password must contain uppercase and lowercase letters"
			);
		}
		if(sequenceValidator.execute(password)){
			objResult.errors.push(
				"Password cannot contain more than 3 sequence of characters, letters or numbers"
			);
		}
		if(spaceValidator.execute(password)){
			objResult.errors.push("Password cannot contain spaces");
		}

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
