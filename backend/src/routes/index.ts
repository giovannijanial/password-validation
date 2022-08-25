import { Router } from "express";
import { PasswordValidatorController } from "../modules/passwordValidator/useCases/passwordValidatorController";

const route = Router();
const passwordValidationController = new PasswordValidatorController();

route.post("/", passwordValidationController.handle);

export { route };
