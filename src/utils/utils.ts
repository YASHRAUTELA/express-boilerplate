import { Response } from "express";
import { CustomError } from "../config/error";
const multer = require("multer");

interface ResponseType {
    status: string;
    code: number;
    message?: string;
    data?: any;
    error?: any;
}

const isStatusOk = (status: number) => status >= 200 && status <= 207;

const formattedResponse = (status: number, data?: any, message?: string, error?: any) => {
    const response: ResponseType = {
        status: isStatusOk(status) ? "success" : "error",
        code: status,
        message: message || "Success",
        data: data || {},
        error: error || {},
    };
    return response;
};

const handleErrorResponse = (response: Response, error: any) => {
    if (error instanceof Error) {
        throw new CustomError(error.message, 500, {}, error.stack);
    }
    response.statusCode = error.code || 500;
    response.json(error);
};

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, "uploads/");
    },
    filename: function (req: any, file: any, cb: any) {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        cb(null, uniqueSuffix);
    },
});

const upload = multer({ storage });

export { ResponseType, formattedResponse, handleErrorResponse, isStatusOk, upload };
