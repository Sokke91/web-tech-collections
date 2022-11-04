import { Router } from "express";
import controller from "./controller";

const todoRouter = Router();

todoRouter.get("/", controller.getAll);
todoRouter.get("/:id", controller.getOne);
todoRouter.post("/", controller.addTodo);
todoRouter.delete("/:id", controller.removeTodo);
export default todoRouter;
