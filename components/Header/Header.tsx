'use client';

import css from './Header.module.css';
import Logo from '../Logo/Logo';
import MobileMenuBtn from './MobileMenuBtn/MobileMenuBtn';
import Link from 'next/link';
import SelectPrimary from '../SelectPrimary/SelectPrimary';
import {
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_LINK,
  CONTACT_WHATS_APP_LINK,
} from '@/lib/constants';

export default function Header() {
  function selectContact(option: string) {
    if (option === 'Телефон') {
      window.location.href = CONTACT_PHONE_LINK;
    }
    if (option === 'WhatsApp') {
      window.location.href = CONTACT_WHATS_APP_LINK;
    }
    if (option === 'Email') {
      window.location.href = CONTACT_EMAIL_LINK;
    }
  }

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <MobileMenuBtn />
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="#howWeWork" className={css.navLink}>
                Как мы работаем
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="#ourWorks" className={css.navLink}>
                Наши работы
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="#request" className={css.navLink}>
                Оставить заявку
              </Link>
            </li>
            <li className={css.navItem}>
              <SelectPrimary
                width={121}
                height={106}
                options={['Телефон', 'WhatsApp', 'Email']}
                placeholder="Контакты"
                handleChange={option => selectContact(option)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
