import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateProductCategoryController } from "../controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "../controllers/CreateProductWithExistCategory";
import { GetProductController } from "../controllers/GetProductController";
import { GetCategoryController } from "../controllers/GetCategoryController";

export const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();
const getProduct = new GetProductController();
const getCategory = new GetCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductCategoryExist.handle);
router.get("/product/:id", getProduct.handle);
router.get("/category/:id", getCategory.handle);