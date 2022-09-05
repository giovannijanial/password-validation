interface IPasswordValidatorFactory {
	execute(password: string): string | void;
}

export { IPasswordValidatorFactory };
