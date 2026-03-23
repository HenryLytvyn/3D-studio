import clsx from 'clsx';
import css from './Button.module.css';

interface Props {
  value: string;
  // variant: 'submit' | 'button';
  type: 'submit' | 'button';
  onClick?: () => void;
  width: string;
  isDisabled?: boolean;
}

export default function Button({
  value,
  // variant,
  type,
  onClick,
  width,
  isDisabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.buttonSubmit, isDisabled && css.buttonDisabled)}
    >
      {value}
    </button>
  );
}
