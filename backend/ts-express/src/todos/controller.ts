import { Request, Response } from "express";
import model from "./model";

const controller = {
  getAll(request: Request, response: Response) {
    response.json(model.getAll());
  },
  getOne(request: Request, response: Response) {
    response.json(model.getOne(+request.params.id));
  },
  addTodo(request: Request, response: Response) {
    model.add(request.body);
    response.json(`${request.body.name} angelegt`);
  },
  removeTodo(request: Request, response: Response) {
    model.remove(+request.params.id);
    response.json(`Todo mit id ${request.params.id} deleted`);
  },
};

export default controller;
