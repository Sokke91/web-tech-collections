interface Todo {
  id: number;
  name: string;
}

interface Model {
  todos: Todo[];
  getAll(): Todo[];
  getOne(id: number): Todo | undefined;
  add(todo: Todo): void;
  remove(id: number): void;
}

const model: Model = {
  todos: [
    {
      id: 1,
      name: "clean the room",
    },
    {
      id: 2,
      name: "journaling",
    },
  ],
  getAll() {
    return this.todos;
  },
  getOne(id: number) {
    return this.todos.find((t) => t.id === id);
  },
  add(todo: Todo) {
    this.todos.push(todo);
  },
  remove(id: number) {
    const todoCopy = { ...this.todos };
    this.todos = todoCopy.filter((t) => t.id !== id);
  },
};

export default model;
