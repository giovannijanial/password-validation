import { LowercaseAndUppercaseValidator } from "../../../factories/implementations/LowercaseAndUppercaseValidator";
import { SequenceCharactersValidator } from "../../../factories/implementations/SequenceCharactersValidator";
import { SizeValidator } from "../../../factories/implementations/SizeValidator";
import { SpaceValidator } from "../../../factories/implementations/SpaceValidator";
import { SpecialCharactersValidator } from "../../../factories/implementations/SpacialCharactersValidator";
import { PasswordValidatorController } from "./passwordValidatorController";
import { PasswordValidatorUseCase } from "./passwordValidatorUseCase";

const lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
const sequenceCharactersValidator = new SequenceCharactersValidator();
const sizeValidator = new SizeValidator();
const specialCharactersValidator = new SpecialCharactersValidator();
const spaceValidator = new SpaceValidator();

const passwordValidationUseCase = new PasswordValidatorUseCase(
	lowercaseAndUppercaseValidator,
	sequenceCharactersValidator,
	sizeValidator,
	specialCharactersValidator,
	spaceValidator
);
const passwordValidatorController = new PasswordValidatorController(
	passwordValidationUseCase
);

export { passwordValidationUseCase, passwordValidatorController };
