import { IPasswordValidatorFactory } from "../IPasswordValidatorFactory";

class SpaceValidator implements IPasswordValidatorFactory {
	execute(password: string): string | void {
		if (password.includes(" ")) return "Password cannot contain spaces";
		return;
	}
}

export { SpaceValidator };
