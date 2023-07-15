import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("RootLayout tests:", () => {
  it("should be render  header", () => {
    const { container } = render(<Home />);

    expect(container.querySelector("header")).toBeInTheDocument();
  });
});
