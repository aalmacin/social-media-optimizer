import React from 'react';
import { useFormik } from 'formik';
import { useDropzone, Accept, FileRejection } from 'react-dropzone';
import './ImageFileUpload.css';
import Button from '../Button';

type ImageFileUploadProps = {
  onFileUpload: (file: File) => void;
  onInvalidFileType?: (message: string) => void;
};

type FileValue = {
  name: string;
  type: string;
};

const ImageFileUpload: React.FC<ImageFileUploadProps> = ({ onFileUpload, onInvalidFileType }) => {
  const formik = useFormik({
    initialValues: {
      file: null as FileValue | null,
    },
    onSubmit: (values) => {
      if (values.file) {
        onFileUpload(values.file as unknown as File);
      }
    },
  });

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0 && onInvalidFileType) {
      onInvalidFileType('Invalid file type. Please upload an image file.');
      return;
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      formik.setFieldValue('file', { name: file.name, type: file.type });
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: { 'image/*': [] } as Accept,
    maxFiles: 1,
    noClick: false, // Allow clicking on the dropzone to open the file dialog
  });

  return (
    <form onSubmit={formik.handleSubmit} className="file-upload-container">
      <div
        {...getRootProps({
          className: `dropzone ${formik.errors.file ? 'border-red' : 'border-gray'}`,
        })}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      {formik.values.file && (
        <p className="file-name">Selected file: {formik.values.file.name}</p>
      )}
      <Button label="Choose File" onClick={open} />
      <Button label="Upload" onClick={formik.handleSubmit} />
    </form>
  );
};

export default ImageFileUpload;