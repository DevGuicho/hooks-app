import { shallow } from "enzyme";
import HooksApp from "../HooksApp";

describe("Pruebas del componente <HookApp />", () => {
  test("debe mostrar correctamenete el componente", () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
