import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
describe("ErrorMessage Component", () => {
    it("renders the error message when a message is provided", () => {
        render(_jsx(ErrorMessage, { message: "This is an error!" }));
        expect(screen.getByText("This is an error!")).toBeInTheDocument();
    });
    it("does not render anything when the message is null", () => {
        const { container } = render(_jsx(ErrorMessage, { message: null }));
        expect(container.firstChild).toBeNull();
    });
});
