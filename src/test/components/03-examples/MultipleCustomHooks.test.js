import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../hooks/useCounter";

import useFetch from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
    });
  });

  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Walter White",
          quote: "Say my name",
        },
      ],
      isLoading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find("p").text().trim()).toBe("Say my name");
  });
});
