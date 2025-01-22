import React, { useState } from 'react';
import { useDropzone, Accept, FileRejection } from 'react-dropzone';
import './ImageFileUpload.css';

type ImageFileUploadProps = {
  onFileChange: (file: File) => void;
  onInvalidFileUpload: (message: string) => void;
};

const ImageFileUpload: React.FC<ImageFileUploadProps> = ({
  onFileChange,
  onInvalidFileUpload,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      onInvalidFileUpload("Invalid file type. Please upload an image file.");
      return;
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.size > 5 * 1024 * 1024) {
        onInvalidFileUpload("File size exceeds 5MB. Please upload a smaller file.");
        return;
      }

      onFileChange(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] } as Accept,
    maxFiles: 1,
  });

  return (
    <div className="file-upload-container">
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" className="preview-image" />
        </div>
      )}
      <div {...getRootProps({ className: 'dropzone border-gray' })}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one (only image files under 5MB)</p>
      </div>
    </div>
  );
};

export default ImageFileUpload;
