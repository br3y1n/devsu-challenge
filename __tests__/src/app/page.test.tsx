import { render, screen } from "@test-utils";
import Home from "@app/page";

describe("Home tests:", () => {
  it("should be render  header with a banco image and 1 main", () => {
    const { container } = render(<Home />);
    const image = screen.getByAltText("banco pichincha");
    const main = screen.getByRole("main");

    expect(container.querySelector("header")).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
