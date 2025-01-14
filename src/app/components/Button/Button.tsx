import './TheButton.css';

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'default',
  size = 'medium',
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;
  const className = `button ${variantClass} ${sizeClass}`;

  return (
    <button className={className} onClick={onClick} {...props}>
      {label}
    </button>
  );
};
