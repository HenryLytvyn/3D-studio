// FormField.tsx

'use client';

import { ErrorMessage, Field } from 'formik';
import css from './FormField.module.css';
import { useId } from 'react';
import clsx from 'clsx';

interface Props {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  width?: string;
  padding?: string;
  className?: string;
  as?: React.ElementType;
}

export default function FormField({
  label,
  placeholder,
  name,
  type,
  width = '100%',
  padding = '5px',
  className = '',
  as,
}: Props) {
  const fieldId = useId();

  return (
    <div className={css.fieldWrapper}>
      <label htmlFor={`${fieldId}-${name}`} className={css.inputLabel}>
        {label}
      </label>

      <Field
        id={`${fieldId}-${name}`}
        type={type}
        name={name}
        className={clsx(css.inputField, className)}
        placeholder={placeholder}
        as={as}
      />

      <ErrorMessage component="span" name={name} className={css.errorMessage} />
    </div>
  );
}
