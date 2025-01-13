import { useState } from "react";
import "./App.css";
import ImageFileUpload from "./app/components/ImageFileUpload";
import ErrorMessage from "./app/components/ErrorMessage";
import Button from "./app/components/Button";

function App() {
  const [error, setError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    if (!file) {
      setError("Please upload a valid file.");
      return;
    }
    setError(null);
    setUploadedFile(file);
    console.log("File uploaded:", file);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rapasu: Social Media Optimizer for Artists</h1>
      </header>

      <main className="app-main">
        <section className="upload-section">
          <h2>Upload Your Artwork</h2>
          <ImageFileUpload onFileUpload={handleFileUpload} />
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
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Rapasu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
