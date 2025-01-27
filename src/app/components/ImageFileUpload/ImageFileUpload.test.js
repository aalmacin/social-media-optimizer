import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent, act } from "@testing-library/react";
import ImageFileUpload from "./ImageFileUpload";
beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "mock-url");
});
afterAll(() => {
    delete global.URL.createObjectURL;
});
describe("ImageFileUpload Component", () => {
    it("handles a valid file upload", async () => {
        const onFileChangeMock = jest.fn();
        const { container } = render(_jsx(ImageFileUpload, { onFileChange: onFileChangeMock, onInvalidFileUpload: jest.fn() }));
        const dropzone = container.querySelector(".dropzone");
        const file = new File(["image content"], "test.png", { type: "image/png" });
        await act(async () => {
            fireEvent.drop(dropzone, {
                target: { files: [file] },
            });
        });
        expect(onFileChangeMock).toHaveBeenCalledWith(file);
    });
    it("calls onInvalidFileUpload for invalid file types", async () => {
        const onInvalidFileUploadMock = jest.fn();
        const { container } = render(_jsx(ImageFileUpload, { onFileChange: jest.fn(), onInvalidFileUpload: onInvalidFileUploadMock }));
        const dropzone = container.querySelector(".dropzone");
        const invalidFile = new File(["text content"], "test.txt", {
            type: "text/plain",
        });
        await act(async () => {
            fireEvent.drop(dropzone, {
                target: { files: [invalidFile] },
            });
        });
        expect(onInvalidFileUploadMock).toHaveBeenCalledWith("Invalid file type. Please upload an image file. Ex. png, jpg, jpeg, webp");
    });
    it("calls onInvalidFileUpload for files exceeding size limit", async () => {
        const onInvalidFileUploadMock = jest.fn();
        const { container } = render(_jsx(ImageFileUpload, { onFileChange: jest.fn(), onInvalidFileUpload: onInvalidFileUploadMock }));
        const dropzone = container.querySelector(".dropzone");
        const largeFile = new File(["a".repeat(6 * 1024 * 1024)], "large.png", {
            type: "image/png",
        });
        await act(async () => {
            fireEvent.drop(dropzone, {
                target: { files: [largeFile] },
            });
        });
        expect(onInvalidFileUploadMock).toHaveBeenCalledWith("File size exceeds 5MB. Please upload a smaller file.");
    });
});
