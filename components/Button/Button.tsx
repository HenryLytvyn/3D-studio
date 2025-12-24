import clsx from 'clsx';
import css from './Button.module.css';

interface Props {
  value: string;
  variant: 'submit';
  type: 'submit';
  width: string;
  isDisabled?: boolean;
}

export default function Button({
  value,
  variant,
  type,
  width,
  isDisabled = false,
}: Props) {
  return (
    <button
      type={type}
      className={clsx(css.buttonSubmit, isDisabled && css.buttonDisabled)}
    >
      {value}
    </button>
  );
}
