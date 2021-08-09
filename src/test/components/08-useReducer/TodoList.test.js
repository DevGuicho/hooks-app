import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoList
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      todos={demoTodos}
    />
  );
  test("debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe tener dos <TodoListItem />", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
