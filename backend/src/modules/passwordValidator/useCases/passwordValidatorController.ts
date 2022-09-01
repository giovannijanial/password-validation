import { Request, Response } from "express";
import { PasswordValidatorUseCase } from "./passwordValidatorUseCase";

class PasswordValidatorController {
	constructor(private passwordValidatorUseCase: PasswordValidatorUseCase) {}
	handle(req: Request, res: Response) {
		const { password } = req.body;

		const result = this.passwordValidatorUseCase.execute(password);
		res.status(201).send(result);
	}
}

export { PasswordValidatorController };
