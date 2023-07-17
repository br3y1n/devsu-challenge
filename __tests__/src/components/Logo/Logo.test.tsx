import Logo from "@components/Logo/Logo";
import { render, screen } from "@test-utils";

describe("Logo tests:", () => {
  it("should be render a img", () => {
    render(<Logo src="test" alt="alt text" />);

    const logo = screen.getByAltText("alt text");

    expect(logo).toBeInTheDocument();
  });
});
