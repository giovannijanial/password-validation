import { AppError } from "../../../errors/AppError";
import { LowercaseAndUppercaseValidator } from "../utils/lowercaseAndUppercaseValidator";
import { SequenceValidator } from "../utils/sequenceValidator";
import { SizeValidator } from "../utils/sizeValidator";
import { SpecialCharactersValidator } from "../utils/specialValidator";

class PasswordValidatorUseCase {
	execute(password: string): IResult {
		let objResult: IResult = { result: true, errors: [] };

		const sizeValidator = new SizeValidator();
		const specialCharactersValidator = new SpecialCharactersValidator();
		const lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
		const sequenceValidator = new SequenceValidator();

		objResult = sizeValidator.execute(password, objResult);
		objResult = specialCharactersValidator.execute(password, objResult);
		objResult = lowercaseAndUppercaseValidator.execute(password, objResult);
		objResult = sequenceValidator.execute(password, objResult);

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
