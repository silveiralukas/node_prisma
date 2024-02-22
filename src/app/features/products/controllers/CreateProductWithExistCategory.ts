import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateProductWithExistCategory {
    async handle(req: Request, res: Response) {
        const { name, price, bar_code, id_category } = req.body;

        const product = await prismaClient.productCategory.create({
            data: {
                product: {
                    create: {
                        bar_code,
                        name,
                        price
                    }
                },
                category: {
                    connect: {
                        id: id_category
                    }
                }
            }
        })

        return res.json(product);
    }
}