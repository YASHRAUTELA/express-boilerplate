import express from "express";
import { appController } from "../controller/AppController";
import { upload } from "../utils/utils";

class UserRoutes {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes() {
        this.express.get("/", appController.fetch);
        this.express.post("/", upload.single("avatar"), appController.insert);
        this.express.put("/", appController.update);
        this.express.delete("/", appController.delete);
    }
}

const userRoutes = new UserRoutes().express;
export { userRoutes };
