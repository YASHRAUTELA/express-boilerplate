import { Request, Response } from "express";

import { addUser, deleteUser, fetchUsers, updateUser } from "../services/users";
import { formattedResponse, handleErrorResponse } from "../utils/utils";
class AppController {
    async fetch(request: Request, response: Response) {
        try {
            const data = await fetchUsers();
            response.json(formattedResponse(200, data, "User data fetched successfully"));
        } catch (error: any) {
            handleErrorResponse(response, error);
        }
    }

    async insert(request: Request, response: Response) {
        try {
            const { name, email } = request.body;
            const data = await addUser(name, email);
            const user = await fetchUsers(data.insertId);
            response.json(formattedResponse(200, user[0], "User data added successfully"));
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
