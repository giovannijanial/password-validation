interface IPasswordValidatorFactory {
	execute(password: string, minSize?: number, maxSize?: number): string;
}

export { IPasswordValidatorFactory };
