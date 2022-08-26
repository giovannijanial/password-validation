class SpaceValidator {
	execute(password: string, objResult: IResult): IResult {
		const CHARCODE_SPACE = 32;
		const arrPassword = password.split("");
		let hasSpace = false;

		arrPassword.forEach((character) => {
			if (character.charCodeAt(0) === 32) {
				hasSpace = true;
			}
		});

		if (hasSpace) {
			objResult.result = false;
			objResult.errors.push("Password cannot contain spaces");
		}
		return objResult;
	}
}

export { SpaceValidator };
