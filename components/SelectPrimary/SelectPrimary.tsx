'use client';

import { useRef, useState } from 'react';
import css from './SelectPrimary.module.css';
import { Icon } from '../Icon/Icon';
import { useClickOutside } from '@/lib/hooks/useClickOutside';

interface Props {
  width: number;
  height: number;
  options: string[];
  placeholder: string;
  value?: string | undefined;
  handleChange?: (value: string) => void;
  symbolBeforeValue?: string;
}

export default function SelectPrimary({
  width,
  height,
  options,
  placeholder,
  value,
  handleChange,
  symbolBeforeValue,
}: Props) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside({
    ref: selectRef,
    callback: () => setIsOpen(false),
  });

  function toggle() {
    setIsOpen(!isOpen);
  }

  function handleSelect(option: string) {
    setIsOpen(false);
    // handleChange(option);
  }

  return (
    <>
      <div
        className={`${css.customSelect} ${isOpen ? css.open : ''}`}
        style={{ width: width }}
        ref={selectRef}
      >
        <div className={css.customSelectTrigger} onClick={toggle}>
          <p>
            {!value && placeholder}
            {value && symbolBeforeValue && `${symbolBeforeValue}${value}`}
            {!symbolBeforeValue && value}
          </p>
          <Icon name="icon-Chevron-Down" className={css.arrowIcon} />
        </div>
        <div
          className={css.customSelectOptionsContainer}
          style={{ height: height }}
        >
          <ul className={css.customSelectOptions}>
            {options.map(option => (
              <li
                className={`${css.customSelectItem} ${option === value ? css.selected : ''}`}
                key={option}
                onClick={() => {
                  handleSelect(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
