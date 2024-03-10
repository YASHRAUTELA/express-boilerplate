import { Request, Response } from "express";

import redisClient from "../config/redis";
import { deleteUser, fetchUsers, saveUserFiles, updateUser } from "../services/users";
import { formattedResponse, handleErrorResponse } from "../utils/utils";

class AppController {
    async fetch(request: Request, response: Response) {
        try {
            const cachedData = await redisClient.get("users");
            if (cachedData) {
                response.json(
                    formattedResponse(
                        200,
                        JSON.parse(cachedData),
                        "User data fetched successfully",
                    ),
                );
                return;
            }
            const data = await fetchUsers();
            redisClient.setEx("users", 60, JSON.stringify(data));
            response.json(formattedResponse(200, data, "User data fetched successfully"));
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }

    async insert(request: Request, response: Response) {
        try {
            const file = request.file;

            if (file) {
                const responseData = await saveUserFiles(
                    `/${file?.destination + file.filename}`,
                    file.filename,
                );
                response.json(formattedResponse(200, responseData, "File saved successfully"));
                return;
            }
            response.json(formattedResponse(200, {}, "User data added successfully"));
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { name, userId } = request.body;
            const data = await updateUser(name, userId);
            let responseData = {};
            if (data.affectedRows > 0) {
                responseData = await fetchUsers(userId);
            }
            response.json(formattedResponse(200, responseData, "User data updated successfully"));
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { userId } = request.body;
            const data = await deleteUser(userId);
            let responseData = {};
            if (data.affectedRows > 0) {
                responseData = await fetchUsers(userId);
            }
            response.json(formattedResponse(200, responseData, "User data deleted successfully"));
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }
}

const appController = new AppController();

export { appController };
