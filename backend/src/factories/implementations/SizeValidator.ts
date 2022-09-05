import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class SizeValidator implements IPasswordValidatorFactory {
	execute(password: string): string | void {
		const MIN_SIZE = 16;
		const MAX_SIZE = 36;
		const arrPassword = password.split("");

		if (arrPassword.length < MIN_SIZE || arrPassword.length > MAX_SIZE)
			return "Invalid password size";
		return;
	}
}

export { SizeValidator };
