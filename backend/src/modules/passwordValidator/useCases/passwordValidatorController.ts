import { Request, Response } from "express";
import { PasswordValidatorUseCase } from "./passwordValidatorUseCase";

class PasswordValidatorController {
	handle(req: Request, res: Response) {
		const { password } = req.body;

		const passwordValidationUseCase = new PasswordValidatorUseCase();
		const result = passwordValidationUseCase.execute(password);
		res.status(201).send(result);
	}
}

export { PasswordValidatorController };
