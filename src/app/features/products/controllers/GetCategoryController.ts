import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const category = await prismaClient.category.findFirst({
            where: {
                id,
            },
            include: {
                ProductCategory: true,
            }
        })
        return res.json(category);
    }
}