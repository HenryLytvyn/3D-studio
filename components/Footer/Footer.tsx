import Link from 'next/link';
import Logo from '../Logo/Logo';
import css from './Footer.module.css';
import {
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_LINK,
  CONTACT_WHATS_APP_LINK,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.contentWrapper}>
          <div className={css.logoWrapper}>
            <Logo />
          </div>

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
              <Link href={CONTACT_PHONE_LINK} className={css.navLink}>
                Телефон
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href={CONTACT_WHATS_APP_LINK} className={css.navLink}>
                WhatsApp
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href={CONTACT_EMAIL_LINK} className={css.navLink}>
                Email
              </Link>
            </li>
          </ul>
        </div>

        <div className={css.divider}></div>

        <div className={css.termsWrapper}>
          <ul className={css.termsList}>
            <li className={css.termsItem}>
              <Link className={css.termsLink} href="/">
                Конфиденциальность
              </Link>
            </li>
            <li className={css.termsItem}>
              <Link className={css.termsLink} href="/">
                Условия использования
              </Link>
            </li>
            <li className={css.termsItem}>
              <Link className={css.termsLink} href="/">
                Настройки cookies
              </Link>
            </li>
          </ul>

          <p className={css.copyRight}>&copy; 2025 3D печать в Лондоне</p>
        </div>
      </div>
    </footer>
  );
}
