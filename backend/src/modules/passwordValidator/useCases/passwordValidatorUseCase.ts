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
		const validations = [
			this.lowercaseAndUppercaseValidator.execute(password),
			this.sequenceCharactersValidator.execute(password),
			this.sizeValidator.execute(password, 16, 36),
			this.specialCharactersValidator.execute(password),
			this.spaceValidator.execute(password),
		];

		const objResult = validations.reduce(
			(acc: IResult, err: string) => {
				if (err) {
					acc.errors.push(err);
					acc.result = false;
				}
				return acc;
			},
			{ result: true, errors: [] }
		);

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
