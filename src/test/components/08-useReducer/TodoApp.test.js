import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("pruebas en <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0].desc);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1].desc);
    });
    expect(wrapper.find("h1").text().trim()).toBe("Todo App (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
});
