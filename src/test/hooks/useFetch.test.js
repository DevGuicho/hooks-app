import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("Pruebas de useFetch", () => {
  test("debe de retornar la información por defecto", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
    );
    const { data, isLoading, error } = result.current;
    expect(data).toBe(null);
    expect(isLoading).toBe(true);
    expect(error).toBe(null);
  });
  test("debe de tener informacion correcta, error null, isLoading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
    );
    await waitForNextUpdate();
    const { data, isLoading, error } = result.current;
    expect(data.length).toBe(1);
    expect(isLoading).toBe(false);
    expect(error).toBe(null);
  });
  test("debe obtener un error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apid/users?page=2")
    );
    await waitForNextUpdate();
    const { data, isLoading, error } = result.current;
    expect(data).toBe(null);
    expect(isLoading).toBe(false);
    expect(error).toBe("No se pueden cargar la informacion");
  });
});
