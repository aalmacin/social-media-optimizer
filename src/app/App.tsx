import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Button from "./components/Button";
import ImageFileUpload from "./components/ImageFileUpload";

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File) => {
    setUploadedFile(file);
    setError(null);
  };

  const handleInvalidFileUpload = (message: string) => {
    setError(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      setError("Please upload an image file.");
      return;
    }
    setError(null);
    console.log("Form submitted with file:", uploadedFile.name);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rapasu: Social Media Optimizer for Artists</h1>
      </header>

      <main className="app-main">
        <form onSubmit={handleSubmit} className="file-upload-container">
          <section className="upload-section">
            <h2>Upload Your Artwork</h2>
            <ImageFileUpload
              onFileChange={handleFileChange}
              onInvalidFileUpload={handleInvalidFileUpload}
            />
            {uploadedFile && (
              <p className="file-info">Uploaded File: {uploadedFile.name}</p>
            )}
            {error && <ErrorMessage message={error} />}
          </section>

          <section className="actions-section">
            <h2>Optimize Your Post</h2>
            <Button
              variant="primary"
              label="Generate Captions"
              size="medium"
              onClick={() => {
                if (!uploadedFile) {
                  setError("Please upload an artwork first.");
                  return;
                }
                setError(null);
                console.log("Generating captions for:", uploadedFile.name);
              }}
            />
            <div className="file-upload-submit">
              <Button
                label="Submit Form"
                variant="success"
                size="medium"
              />
            </div>
          </section>
        </form>
      </main>

      <footer className="app-footer">
        <p>© 2025 Rapasu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
