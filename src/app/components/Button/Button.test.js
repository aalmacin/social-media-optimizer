import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
test("renders button with label", () => {
    render(_jsx(Button, { label: "Click Me" }));
    expect(screen.getByText("Click Me")).toBeInTheDocument();
});
test("handles click events", () => {
    const handleClick = jest.fn();
    render(_jsx(Button, { label: "Click Me", onClick: handleClick }));
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
