interface IPasswordValidatorFactory {
	lowercaseAndUppercaseCharacters(password: string): boolean;
	sequenceCharacters(password: string): boolean;
	sizePassword(password: string, minSize?: number, maxSize?: number): boolean;
	spaceCharacter(password: string): boolean;
	specialCharacters(password: string): boolean;
}

export { IPasswordValidatorFactory };
