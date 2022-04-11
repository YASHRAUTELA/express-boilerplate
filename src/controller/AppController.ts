import { Request, Response } from "express";

class AppController {
    getData(request: Request, response: Response) {
        response.json({ data: "App Success!" });
    }
}

const appController = new AppController();

export { appController };
