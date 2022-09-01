import { PasswordValidatorFactory } from "../../../factories/implementations/PasswordValidatorFactory";
import { PasswordValidatorController } from "./passwordValidatorController";
import { PasswordValidatorUseCase } from "./passwordValidatorUseCase";

const passwordValidatorFactory = new PasswordValidatorFactory();

const passwordValidationUseCase = new PasswordValidatorUseCase(
	passwordValidatorFactory
);
const passwordValidatorController = new PasswordValidatorController(
	passwordValidationUseCase
);

export { passwordValidationUseCase, passwordValidatorController };
