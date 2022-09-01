import { Router, Request, Response } from "express";
import { passwordValidatorController } from "../modules/passwordValidator/useCases";

const route = Router();

route.post("/", (req: Request, res: Response) =>
	passwordValidatorController.handle(req, res)
);

export { route };
