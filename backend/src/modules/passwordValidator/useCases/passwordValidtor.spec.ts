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
		const objResult: IResult = { result: true, errors: [] };
		const validSizePassword = "wswswswswswswswswswswsws";
		const validResult = sizeValidator.execute(validSizePassword, objResult);

		expect(validResult).toEqual({
			result: true,
			errors: [],
		});
	});
	it("Should not be possible to enter a password less than 16 characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const shortPassword = "ws";
		const shortResult = sizeValidator.execute(shortPassword, objResult);
		expect(shortResult).toEqual({
			result: false,
			errors: ["Invalid password size"],
		});
	});
	it("Should not be possible to enter a password greater than 32 characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const largePassword = "wswswswswswswswswswswswswswswswswswswswswswswswsws";
		const largeResult = sizeValidator.execute(largePassword, objResult);

		expect(largeResult).toEqual({
			result: false,
			errors: ["Invalid password size"],
		});
	});
});

describe("Special Characteres Validator", () => {
	let specialCharactersValidator: SpecialCharactersValidator;

	beforeAll(() => {
		specialCharactersValidator = new SpecialCharactersValidator();
	});

	it("Should be possible to enter a password containing 2 special characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = specialCharactersValidator.execute(
			validPassword,
			objResult
		);

		expect(validResult).toEqual({
			result: true,
			errors: [],
		});
	});
	it("Should not be possible to enter a password less 2 special characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const invalidPassword = "wsws";
		const invalidResult = specialCharactersValidator.execute(
			invalidPassword,
			objResult
		);
		expect(invalidResult).toEqual({
			result: false,
			errors: ["Password must contain at least 2 special characters"],
		});
	});
});

describe("Lowercase and Uppercase Characteres Validator", () => {
	let lowercaseAndUppercaseValidator: LowercaseAndUppercaseValidator;

	beforeAll(() => {
		lowercaseAndUppercaseValidator = new LowercaseAndUppercaseValidator();
	});

	it("Should be possible to enter a password with uppercase and lowercase characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = lowercaseAndUppercaseValidator.execute(
			validPassword,
			objResult
		);

		expect(validResult).toEqual({
			result: true,
			errors: [],
		});
	});
	it("Should not be possible to insert a password only with lowercase characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const invalidPassword = "wswswsws";
		const invalidResult = lowercaseAndUppercaseValidator.execute(
			invalidPassword,
			objResult
		);
		expect(invalidResult).toEqual({
			result: false,
			errors: ["Password must contain uppercase and lowercase letters"],
		});
	});

	it("Should not be possible to insert a password only with upercase characters", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const invalidPassword = "WSWSWSWSW";
		const invalidResult = lowercaseAndUppercaseValidator.execute(
			invalidPassword,
			objResult
		);
		expect(invalidResult).toEqual({
			result: false,
			errors: ["Password must contain uppercase and lowercase letters"],
		});
	});
});

describe("Sequence Validator", () => {
	let sequenceValidator: SequenceValidator;

	beforeAll(() => {
		sequenceValidator = new SequenceValidator();
	});

	it("Should be possible to enter a password without containing more than 3 sequences of characters, letters or numbers", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = sequenceValidator.execute(validPassword, objResult);

		expect(validResult).toEqual({
			result: true,
			errors: [],
		});
	});
	it("Should not be possible to enter a password with more than 3 sequences of characters, letters or numbers", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const invalidPassword = "c|e_AbC>F%8J%k`N8";
		const invalidResult = sequenceValidator.execute(invalidPassword, objResult);
		expect(invalidResult).toEqual({
			result: false,
			errors: [
				"Password cannot contain more than 3 sequence of characters, letters or numbers",
			],
		});
	});
});

describe("Space Validator", () => {
	let spaceValidator: SpaceValidator;

	beforeAll(() => {
		spaceValidator = new SpaceValidator();
	});

	it("Should be possible to enter a password without containing spaces", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = spaceValidator.execute(validPassword, objResult);

		expect(validResult).toEqual({
			result: true,
			errors: [],
		});
	});
	it("Should not be possible to enter a password with spaces", async () => {
		const objResult: IResult = { result: true, errors: [] };
		const invalidPassword = " c|e_AbC>F%8J%k`N8";
		const invalidResult = spaceValidator.execute(invalidPassword, objResult);
		expect(invalidResult).toEqual({
			result: false,
			errors: ["Password cannot contain spaces"],
		});
	});
});
