import { LowercaseAndUppercaseValidator } from "../utils/lowercaseAndUppercaseValidator";
import { SequenceValidator } from "../utils/sequenceValidator";
import { SizeValidator } from "../utils/sizeValidator";
import { SpaceValidator } from "../utils/spaceValidator";
import { SpecialCharactersValidator } from "../utils/specialValidator";

describe("Size Validator", () => {
	it("Should be possible to enter a password containing 16 to 32 characters", async () => {
		const validSizePassword = "wswswswswswswswswswswsws";
		const validResult = SizeValidator.execute(validSizePassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password less than 16 characters", async () => {
		const shortPassword = "ws";
		const shortResult = SizeValidator.execute(shortPassword);
		expect(shortResult).toEqual(true);
	});
	it("Should not be possible to enter a password greater than 32 characters", async () => {
		const largePassword = "wswswswswswswswswswswswswswswswswswswswswswswswsws";
		const largeResult = SizeValidator.execute(largePassword);

		expect(largeResult).toEqual(true);
	});
});

describe("Special Characteres Validator", () => {
	it("Should be possible to enter a password containing 2 special characters", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = SpecialCharactersValidator.execute(validPassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password less 2 special characters", async () => {
		const invalidPassword = "wsws";
		const invalidResult = SpecialCharactersValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});

describe("Lowercase and Uppercase Characteres Validator", () => {
	it("Should be possible to enter a password with uppercase and lowercase characters", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = LowercaseAndUppercaseValidator.execute(validPassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to insert a password only with lowercase characters", async () => {
		const invalidPassword = "wswswsws";
		const invalidResult =
			LowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});

	it("Should not be possible to insert a password only with upercase characters", async () => {
		const invalidPassword = "WSWSWSWSW";
		const invalidResult =
			LowercaseAndUppercaseValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});

describe("Sequence Validator", () => {
	it("Should be possible to enter a password without containing more than 3 sequences of characters, letters or numbers", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = SequenceValidator.execute(validPassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password with more than 3 sequences of characters, letters or numbers", async () => {
		const invalidPassword = "c|e_AbC>F%8J%k`N8";
		const invalidResult = SequenceValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});

describe("Space Validator", () => {
	it("Should be possible to enter a password without containing spaces", async () => {
		const validPassword = "rZpy*D95&WBE'Z&B";
		const validResult = SpaceValidator.execute(validPassword);

		expect(validResult).toEqual(false);
	});
	it("Should not be possible to enter a password with spaces", async () => {
		const invalidPassword = " c|e_AbC>F%8J%k`N8";
		const invalidResult = SpaceValidator.execute(invalidPassword);
		expect(invalidResult).toEqual(true);
	});
});
