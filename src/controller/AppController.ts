import { NextFunction, Request, Response } from "express";
import { CustomError } from "../config/error";
import { query } from "../config/mysql";
import { formattedResponse } from "../utils/utils";
class AppController {
    async getData(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await query("SELECST * from users where email=?", ["abc@gmail.com"]);
            response.json(formattedResponse(200, data, "User data fetched successfully"));
        } catch (error: CustomError | any) {
            if (error instanceof Error) {
                throw new CustomError(error.message, 500, error.stack);
            }
            response.statusCode = error.code || 500;
            response.json(error);
        }
    }
}

const appController = new AppController();

export { appController };
