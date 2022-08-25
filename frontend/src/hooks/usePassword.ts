import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { IPassword } from "../interfaces/Password";
import { PasswordService } from "../services/PasswordService";

export const usePassword = () => {
	const [error, setError] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const passwordValidator = useCallback(async (body: IPassword) => {
		setLoading(true);
		try {
			const { data } = await PasswordService.validate(body);
			setError([]);
			setSuccess(true);
		} catch (error: AxiosError | any) {
			setSuccess(false);
			if (!error?.response) {
				setError(["Sem resposta do servidor!"]);
			}
			if (error.response.status === 400) {
				setError(error.response.data?.message);
			}
		} finally {
			setLoading(false);
		}
	}, []);

	return {
		passwordValidator,
		error,
		success,
		loading,
	};
};
