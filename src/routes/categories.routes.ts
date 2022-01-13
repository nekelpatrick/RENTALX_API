import { Router } from "express";
import { PostgresCategoryRepository } from "../modules/cars/repositories/PostgresCategoryRepository";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepositories";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
