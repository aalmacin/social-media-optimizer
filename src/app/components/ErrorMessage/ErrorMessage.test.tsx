import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  it("renders the error message when a message is provided", () => {
    render(<ErrorMessage message="This is an error!" />);
    expect(screen.getByText("This is an error!")).toBeInTheDocument();
  });

  it("does not render anything when the message is null", () => {
    const { container } = render(<ErrorMessage message={null} />);
    expect(container.firstChild).toBeNull();
  });
});
