import DotsButton from "@components/DotsButton/DotsButton";
import { render, screen } from "@test-utils";

describe("DotsButton tests:", () => {
  it("should be render a button with 3 dots", () => {
    render(<DotsButton>Text</DotsButton>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.childElementCount).toBe(3);
  });
});
