import css from './Button.module.css';

interface Props {
  value: string;
  variant: 'submit';
  type: 'submit';
  width: string;
}

export default function Button({ value, variant, type, width }: Props) {
  return (
    <button type={type} className={css.buttonSubmit}>
      {value}
    </button>
  );
}
