import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas del componente <TodoAdd />", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("no debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe llamar la función handleAddTodo", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "Hola Mundo" },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(String));
  });
});
