import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

describe("RootLayout tests:", () => {
  it("should be render an children", () => {
    render(
      <RootLayout>
        <h1>Children</h1>
      </RootLayout>,
    );

    const children = screen.getByText("Children");

    expect(children).toBeInTheDocument();
  });
});
