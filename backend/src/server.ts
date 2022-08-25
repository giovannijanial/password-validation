import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { route } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("json"));
app.use(route);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: "error",
			message: err.message,
		});
	}

	return res.status(500).json({
		status: "error",
		message: `Internal server error - ${err.message}`,
	});
});

app.listen(3000, () => console.log("Server is running"));
