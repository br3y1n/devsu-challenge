import Tooltip from "@components/Tooltip/Tooltip";
import { render, screen, userEvent } from "@test-utils";

describe("Tooltip tests:", () => {
  it("When mouse hovers over the title and moves, then tooltip is displayed and hidden successively", async () => {
    render(
      <Tooltip content="Tooltip here">
        <h1>Title</h1>
      </Tooltip>,
    );

    const title = screen.getByText("Title");

    expect(() => screen.getByText("Tooltip here")).toThrow();

    await userEvent.hover(title);
    const tooltip = screen.getByText("Tooltip here");

    expect(tooltip).toBeInTheDocument();

    await userEvent.unhover(title);

    expect(tooltip).not.toBeInTheDocument();
  });
});
