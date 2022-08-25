import { Api } from "../api";
import { IPassword } from "../interfaces/Password";

const validate = (body: IPassword) => Api.post("/", body);

export const PasswordService = {
	validate,
};
