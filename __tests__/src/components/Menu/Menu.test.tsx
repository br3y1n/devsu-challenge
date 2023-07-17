import { IMenuProps } from "@/components/Menu/Menu.interfaces";
import Menu from "@components/Menu/Menu";
import { render, screen, userEvent } from "@test-utils";

describe("Menu tests:", () => {
  let onClose: jest.Mock;
  let props: IMenuProps;

  beforeEach(() => {
    onClose = jest.fn();
    props = {
      items: [{ text: "text 1", onClick: () => {} }],
      onClose,
      anchorEl: { current: document.createElement("div") },
    };
  });

  it("should be render a ul", () => {
    render(<Menu {...props} />);

    const menu = screen.getByRole("list");

    expect(menu).toBeInTheDocument();
  });

  it("when item is clicked, then onClose is called", async () => {
    const { container } = render(<Menu {...props} />);

    const item = container.querySelector("li");

    await userEvent.click(item as Element);

    expect(onClose).toBeCalledTimes(1);
  });
});
