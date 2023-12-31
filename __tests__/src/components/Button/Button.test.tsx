import Button from "@components/Button/Button";
import { VariantEnum } from "@enums";
import { render, screen } from "@test-utils";

describe("Button tests:", () => {
  it("should be render a button", () => {
    render(<Button variant={VariantEnum.PRIMARY}>Text</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
