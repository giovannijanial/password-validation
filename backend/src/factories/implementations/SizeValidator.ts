import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class SizeValidator implements IPasswordValidatorFactory {
	execute(password: string, minSize: number = 0, maxSize: number = 10): string {
		const arrPassword = password.split("");
		if (arrPassword.length < minSize || arrPassword.length > maxSize)
			return "Invalid password size";
		return "";
	}
}

export { SizeValidator };
