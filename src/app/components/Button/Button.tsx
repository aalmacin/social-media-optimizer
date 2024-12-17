import './button.css';

/** Default Button component  */
export interface ButtonProps {
  /** True if this is the principal component on page. */
  primary?: boolean;
  /** Background color of button */
  backgroundColor?: string;
  /** Size of button */
  size?: 'small' | 'medium' | 'large';
  /** Button contents as text. */
  label: string;
  /** Click handler */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {

  /** Indicate button style */
  const mode = primary ? 'button--primary' : 'button--secondary';

  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};