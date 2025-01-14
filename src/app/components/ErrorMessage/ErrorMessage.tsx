import React from 'react';

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-red-500 mt-2 text-sm">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
