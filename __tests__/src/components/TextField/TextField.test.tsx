import { render, screen } from "@test-utils";
import TextField from "@components/TextField/TextField";

describe("TextField tests:", () => {
  it("should be render a input with label", () => {
    render(<TextField label="TestLabel" id="id" />);

    const input = screen.getByLabelText("TestLabel");

    expect(input).toBeInTheDocument();
  });

  it("should be render a input with helper", () => {
    const { container } = render(<TextField id="id" helperText="helper" />);

    expect(container.querySelector("input")).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("should be render a input with helper, error and fullWidth", () => {
    const { container } = render(
      <TextField id="id" helperText="helper" error fullWidth />,
    );

    expect(container.querySelector("input")).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("should be render a input without label and helperText", () => {
    const { container } = render(<TextField id="id" />);

    expect(container.querySelector("label")).toBeNull();
    expect(container.querySelector("span")).toBeNull();
  });
});
