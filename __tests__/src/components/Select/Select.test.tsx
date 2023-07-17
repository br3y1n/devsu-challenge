import { ISelectProps } from "@components/Select/Select.interfaces";
import Select from "@components/Select/Select";
import { render, screen, userEvent } from "@test-utils";

describe("Select tests:", () => {
  let props: ISelectProps;
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();

    props = {
      onChange,
      options: [
        { text: "option 1", value: "1", selected: false },
        { text: "option 2", value: "2", selected: true },
      ],
    };
  });

  it("should be render option 2", () => {
    render(<Select {...props} />);

    const option2 = screen.getByText("option 2");

    expect(option2).toBeInTheDocument();
    expect(() => screen.getByText("option 1")).toThrow();
  });

  it("when option 2 is clicked, then options are rendered", async () => {
    render(<Select {...props} />);

    const option2 = screen.getByText("option 2");
    await userEvent.click(option2);

    const option1 = screen.getByText("option 1");

    expect(option1).toBeInTheDocument();
  });

  it("when option 1 is clicked, then onChange is called", async () => {
    render(<Select {...props} />);

    const option2 = screen.getByText("option 2");
    await userEvent.click(option2);

    const option1 = screen.getByText("option 1");
    await userEvent.click(option1);

    expect(onChange).toBeCalledTimes(1);
  });

  it("when all options are dont selected, then first options is rendered", async () => {
    const newOptions = props.options.map((option) => ({
      ...option,
      selected: false,
    }));

    render(<Select {...props} options={newOptions} />);

    const option1 = screen.getByText("option 1");
    expect(option1).toBeInTheDocument();
  });
});
