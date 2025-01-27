import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  global.URL.createObjectURL = jest.fn(() => "test.png");
});

afterAll(() => {
  delete global.URL.createObjectURL;
});

describe("App Component", () => {
  it("renders the app with the correct heading", () => {
    render(<App />);
    expect(
      screen.getByText("Rapasu: Social Media Optimizer for Artists")
    ).toBeInTheDocument();
  });

  it("displays an error when submitting without uploading a file", async () => {
    render(<App />);
    const submitButton = screen.getByText("Submit Form");

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(
      screen.getByText("Please upload an image file.")
    ).toBeInTheDocument();
  });

  it("clears the error when a valid file is uploaded", async () => {
    render(<App />);

    // Simulate a file upload
    const fileInput = screen.getByTestId("imagefileupload-dropzone");
    const file = new File(["test"], "test.png", { type: "image/png" });

    await act(async () => {
      fireEvent.change(fileInput, {
        target: { files: [file] },
      });
    });

    expect(
      screen.queryByText("Please upload an image file.")
    ).not.toBeInTheDocument();
    expect(
      await screen.findByText("Uploaded File: test.png")
    ).toBeInTheDocument();
  });

});
