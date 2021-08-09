import useForm from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Luis",
    email: "luvazpa@gmail.com",
  };

  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [form, setValues, reset] = result.current;
    expect(form).toEqual(initialForm);
    expect(typeof setValues).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("debe cambiar los valores del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Luis Vazquez" } });
    });
    const [form] = result.current;
    expect(form).toEqual({ name: "Luis Vazquez", email: "luvazpa@gmail.com" });
  });
  test("debe re establecer el valor de form con reset()", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Luis Vazquez" } });
      reset();
    });
    const [form] = result.current;
    expect(form).toEqual(initialForm);
  });
});
