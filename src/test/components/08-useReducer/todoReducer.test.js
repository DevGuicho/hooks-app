import todoReducer from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe agregar un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "add",
      payload: {
        id: 3,
        desc: "Hola mundo 3",
        done: true,
      },
    });

    expect(state.length).toBe(3);
    expect(state).toEqual([
      ...demoTodos,
      {
        id: 3,
        desc: "Hola mundo 3",
        done: true,
      },
    ]);
  });
  test("debe eliminar un todo", () => {
    const state = todoReducer(demoTodos, {
      type: "delete",
      payload: 2,
    });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });
  test("debe hacer toogle de un done", () => {
    const state = todoReducer(demoTodos, {
      type: "toggle",
      payload: 2,
    });

    expect(state[1].done).toBe(true);
  });
});
