import { IUseInfoMenuButtonState } from "@/components/InfoMenuButton/hooks/useInfoMenuButtonState.interfaces";
import { useInfoMenuButtonState } from "@components/InfoMenuButton/hooks/useInfoMenuButtonState";
import { act, renderHook } from "@test-utils";

describe("useInfoMenuButtonState tests:", () => {
  let result: { current: IUseInfoMenuButtonState };

  beforeEach(() => {
    const { result: currentResult } = renderHook(() =>
      useInfoMenuButtonState(),
    );

    result = currentResult;
  });

  it("should be return a initialState", () => {
    expect(result.current).toEqual({
      onClose: expect.anything(),
      toggleOpen: expect.anything(),
      ref: { current: null },
      open: false,
    });
  });

  it("when toggleOpen is Called, then open change value", () => {
    expect(result.current.open).toEqual(false);

    act(() => result.current.toggleOpen());

    expect(result.current.open).toEqual(true);

    act(() => result.current.toggleOpen());

    expect(result.current.open).toEqual(false);
  });

  it("when onClose is called when open is true, then open change to false", () => {
    expect(result.current.open).toEqual(false);

    act(() => result.current.toggleOpen());

    expect(result.current.open).toEqual(true);

    act(() => result.current.onClose());

    expect(result.current.open).toEqual(false);
  });
});
