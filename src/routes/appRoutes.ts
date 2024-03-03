import express from "express";
import { appController } from "../controller/AppController";

class AppRoutes {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes() {
        this.express.get("/", appController.fetch);
        this.express.post("/", appController.insert);
        this.express.put("/", appController.update);
        this.express.delete("/", appController.delete);
    }
}

const appRoutes = new AppRoutes().express;
export { appRoutes };
