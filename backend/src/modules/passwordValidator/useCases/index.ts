import {
	LowercaseAndUppercaseValidator,
	SequenceCharactersValidator,
	SizeValidator,
	SpaceValidator,
	SpecialCharactersValidator,
} from "../../../factories/implementations/Index";
import { PasswordValidatorController } from "./passwordValidatorController";
import { PasswordValidatorUseCase } from "./passwordValidatorUseCase";

const lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
const sequenceCharactersValidator = new SequenceCharactersValidator();
const sizeValidator = new SizeValidator();
const specialCharactersValidator = new SpecialCharactersValidator();
const spaceValidator = new SpaceValidator();

const passwordValidationUseCase = new PasswordValidatorUseCase([
	lowercaseAndUppercaseValidator,
	sequenceCharactersValidator,
	sizeValidator,
	specialCharactersValidator,
	spaceValidator,
]);
const passwordValidatorController = new PasswordValidatorController(
	passwordValidationUseCase
);

export { passwordValidationUseCase, passwordValidatorController };
