import { AppError } from "../../../errors/AppError";
import { IPasswordValidatorFactory } from "../../../factories/IPasswordValidatorFactory";

class PasswordValidatorUseCase {
	constructor(private passwordValidatorFactory: IPasswordValidatorFactory[]) {}

	execute(password: string): IResult {
		const objResult: IResult = { result: true, errors: [] };

		this.passwordValidatorFactory.forEach((validation) => {
			const error = validation.execute(password);
			if (error) objResult.errors.push(error);
		});

		if (objResult.errors.length) {
			throw new AppError(objResult.errors);
		}

		return objResult;
	}
}

export { PasswordValidatorUseCase };
