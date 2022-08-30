import { LowercaseAndUppercaseValidator } from "../utils/lowercaseAndUppercaseValidator";
import { SequenceValidator } from "../utils/sequenceValidator";
import { SizeValidator } from "../utils/sizeValidator";
import { SpaceValidator } from "../utils/spaceValidator";
import { SpecialCharactersValidator } from "../utils/specialValidator";

describe("Size Validator", () => {
	let sizeValidator: SizeValidator;

	beforeAll(() => {
		sizeValidator = new SizeValidator();
	});

	it("Should be possible to enter a password containing 16 to 32 characters", async () => {
		const validSizePassword = "wswswswswswswswswswswsws";
		const validResult = sizeValidator.execute(validSizePassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password less than 16 characters", async () => {
		const shortPassword = "ws";
		const shortResult = sizeValidator.execute(shortPassword);
		expect(shortResult).toEqual(true);
	});
	it("Should not be possible to enter a password greater than 32 characters", async () => {
		const largePassword = "wswswswswswswswswswswswswswswswswswswswswswswswsws";
		const largeResult = sizeValidator.execute(largePassword);

		expect(largeResult).toEqual(true);
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

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password less 2 special characters", async () => {
		const invalidPassword = "wsws";
		const invalidResult = specialCharactersValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
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

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to insert a password only with lowercase characters", async () => {
		const invalidPassword = "wswswsws";
		const invalidResult =
			lowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});

	it("Should not be possible to insert a password only with upercase characters", async () => {
		const invalidPassword = "WSWSWSWSW";
		const invalidResult =
			lowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});

describe("Sequence Validator", () => {
	let sequenceValidator: SequenceValidator;

	beforeAll(() => {
		sequenceValidator = new SequenceValidator();
	});

	it("Should be possible to enter a password without containing more than 3 sequences of characters, letters or numbers", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = sequenceValidator.execute(validPassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password with more than 3 sequences of characters, letters or numbers", async () => {
		const invalidPassword = "c|e_AbC>F%8J%k`N8";
		const invalidResult = sequenceValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
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

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password with spaces", async () => {
		const invalidPassword = " c|e_AbC>F%8J%k`N8";
		const invalidResult = spaceValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});
