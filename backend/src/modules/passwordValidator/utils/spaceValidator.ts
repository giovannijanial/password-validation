class SpaceValidator {
	static execute(password: string): boolean {
		const CHARCODE_SPACE = 32;
		const arrPassword = password.split("");
		let hasSpace = false;

		arrPassword.forEach((character) => {
			if (character.charCodeAt(0) === 32) {
				hasSpace = true;
			}
		});

		if (hasSpace) {
			return true;
		}
		return false;
	}
}

export { SpaceValidator };
