import InfoIcon from "@components/InfoIcon/InfoIcon";
import { render, screen } from "@test-utils";

describe("InfoIcon tests:", () => {
  it("should be render a 'i' from info", () => {
    render(<InfoIcon />);

    const span = screen.getByText("i");

    expect(span).toBeInTheDocument();
  });
});
