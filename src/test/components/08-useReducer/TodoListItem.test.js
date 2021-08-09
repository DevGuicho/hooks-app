import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      i={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe llamar la funcion handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe llamar la funcion handleToggle", () => {
    wrapper.find("input").simulate("change");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe mostrar correctamente el texto", () => {
    expect(wrapper.find("#desc").text().trim()).toBe(demoTodos[0].desc);
  });
  test("debe de tener la clase complete si el todo.done === true", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(wrapper.find("tr").hasClass("table-success")).toBe(true);
  });
});
