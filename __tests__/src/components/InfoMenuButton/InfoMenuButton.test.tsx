import { IItemMenu } from "@/components/Menu/Menu.interfaces";
import InfoMenuButton from "@components/InfoMenuButton/InfoMenuButton";
import { render, screen, userEvent } from "@test-utils";

describe("InfoMenuButton tests:", () => {
  let items: IItemMenu[];
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    items = [{ text: "menu 1", onClick }];
  });

  it("should be render a button without menu", () => {
    render(<InfoMenuButton items={items} />);

    const button = screen.getByRole("button");

    expect(() => screen.getByText("menu 1")).toThrow();
    expect(button).toBeInTheDocument();
  });

  it("when button is clicked, then menu 1 is rendered", async () => {
    render(<InfoMenuButton items={items} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    const menu = screen.getByText("menu 1");

    expect(menu).toBeInTheDocument();
  });

  it("when menu is clicked, then menu disappear", async () => {
    render(<InfoMenuButton items={items} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    const menu = screen.getByText("menu 1");

    await userEvent.click(menu);

    expect(() => screen.getByText("menu 1")).toThrow();
  });
});
