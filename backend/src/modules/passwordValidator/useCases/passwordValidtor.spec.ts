import {
	LowercaseAndUppercaseValidator,
	SequenceCharactersValidator,
	SizeValidator,
	SpaceValidator,
	SpecialCharactersValidator,
} from "../../../factories/implementations/Index";

describe("Size Validator", () => {
	let sizeValidator: SizeValidator;
	beforeAll(() => {
		sizeValidator = new SizeValidator();
	});

	it("Should be possible to enter a password containing 16 to 32 characters", async () => {
		const validSizePassword = "wswswswswswswswswswswsws";
		const validResult = sizeValidator.execute(validSizePassword, 16, 36);

		expect(validResult).toEqual("");
	});
	it("Should not be possible to enter a password less than 16 characters", async () => {
		const shortPassword = "ws";
		const shortResult = sizeValidator.execute(shortPassword, 16, 36);
		expect(shortResult).toEqual("Invalid password size");
	});
	it("Should not be possible to enter a password greater than 32 characters", async () => {
		const largePassword = "wswswswswswswswswswswswswswswswswswswswswswswswsws";
		const largeResult = sizeValidator.execute(largePassword, 16, 36);

		expect(largeResult).toEqual("Invalid password size");
	});
});

describe("Special Characteres Validator", () => {
	let specialCharactersValidator: SpecialCharactersValidator;
	beforeAll(() => {
		specialCharactersValidator = new SpecialCharactersValidator();
	});

	it("Should be possible to enter a password containing 2 special characters", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = specialCharactersValidator.execute(validPassword);

		expect(validResult).toEqual("");
	});
	it("Should not be possible to enter a password less 2 special characters", async () => {
		const invalidPassword = "wsws";
		const invalidResult = specialCharactersValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(
			"Password must contain at least 2 special characters"
		);
	});
});

describe("Lowercase and Uppercase Characteres Validator", () => {
	let lowercaseAndUppercaseValidator: LowercaseAndUppercaseValidator;
	beforeAll(() => {
		lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
	});

	it("Should be possible to enter a password with uppercase and lowercase characters", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = lowercaseAndUppercaseValidator.execute(validPassword);

		expect(validResult).toEqual("");
	});
	it("Should not be possible to insert a password only with lowercase characters", async () => {
		const invalidPassword = "wswswsws";
		const invalidResult =
			lowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(
			"Password must contain uppercase and lowercase letters"
		);
	});

	it("Should not be possible to insert a password only with upercase characters", async () => {
		const invalidPassword = "WSWSWSWSW";
		const invalidResult =
			lowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(
			"Password must contain uppercase and lowercase letters"
		);
	});
});

describe("Sequence Validator", () => {
	let sequenceCharactersValidator: SequenceCharactersValidator;
	beforeAll(() => {
		sequenceCharactersValidator = new SequenceCharactersValidator();
	});

	it("Should be possible to enter a password without containing more than 3 sequences of characters, letters or numbers", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = sequenceCharactersValidator.execute(validPassword);

		expect(validResult).toEqual("");
	});
	it("Should not be possible to enter a password with more than 3 sequences of characters, letters or numbers", async () => {
		const invalidPassword = "c|e_AbC>F%8J%k`N8";
		const invalidResult = sequenceCharactersValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(
			"Password cannot contain more than 3 sequence of characters, letters or numbers"
		);
	});
});

describe("Space Validator", () => {
	let spaceValidator: SpaceValidator;
	beforeAll(() => {
		spaceValidator = new SpaceValidator();
	});

	it("Should be possible to enter a password without containing spaces", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = spaceValidator.execute(validPassword);

		expect(validResult).toEqual("");
	});
	it("Should not be possible to enter a password with spaces", async () => {
		const invalidPassword = " c|e_AbC>F%8J%k`N8";
		const invalidResult = spaceValidator.execute(invalidPassword);
		expect(invalidResult).toEqual("Password cannot contain spaces");
	});
});
