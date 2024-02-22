import express, { Request, Response, NextFunction } from "express";
import { router } from "../../app/features/products/routes/products.routes";

export const createServer = () => { 
    const app = express();

    app.use(express.json());

    app.use("/api", router);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({error: err.message});
    });

    return app;
}