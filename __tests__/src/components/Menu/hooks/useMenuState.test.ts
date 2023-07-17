import { IUseInfoMenuButtonState } from "@/components/InfoMenuButton/hooks/useInfoMenuButtonState.interfaces";
import { IItemMenu } from "@/components/Menu/Menu.interfaces";
import { useMenuState } from "@/components/Menu/hooks/useMenuState";
import { IUseMenuState } from "@/components/Menu/hooks/useMenuState.interfaces";
import { useInfoMenuButtonState } from "@components/InfoMenuButton/hooks/useInfoMenuButtonState";
import { renderHook, act } from "@test-utils";

describe("useMenuState tests:", () => {
  let result: { current: IUseMenuState };
  let onClose: jest.Mock;
  let onClickMenu: jest.Mock;
  let items: IItemMenu[];
  const ref = document.createElement("div");

  beforeEach(() => {
    onClose = jest.fn();
    onClickMenu = jest.fn();
    items = [{ text: "menu 1", onClick: onClickMenu }];

    const { result: currentResult } = renderHook(() =>
      useMenuState({
        onClose,
        items,
        anchorEl: { current: ref },
      }),
    );

    result = currentResult;
  });

  it("should be return a initialState", () => {
    expect(result.current).toEqual({
      containerData: {
        left: 0,
        top: 0,
        width: 0,
      },
      items: [{ text: "menu 1", onClick: expect.anything() }],
      ref: { current: null },
    });
  });

  it("when menu 1 is clicked, then onClose and onClickMenu is called", () => {
    act(() => result.current.items[0].onClick());

    expect(onClose).toBeCalledTimes(1);
    expect(onClickMenu).toBeCalledTimes(1);
  });
});
