import { render, screen } from "@testing-library/react";
import TextField from "@components/TextField/TextField";

describe("TextField tests:", () => {
  it("should be render a input with label", () => {
    render(<TextField label="TestLabel" id="id" />);

    const input = screen.getByLabelText("TestLabel");

    expect(input).toBeInTheDocument();
  });

  it("should be render a input without label", () => {
    const { container } = render(<TextField id="id" />);

    expect(container.querySelector("label")).toBeNull();
  });
});
