import Link from 'next/link';
import css from './MobileMenu.module.css';
import {
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_LINK,
  CONTACT_WHATS_APP_LINK,
} from '@/lib/constants';

type MobileMenuProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export default function MobileMenu({ isOpen, handleClick }: MobileMenuProps) {
  return (
    <div className={`${css.mobileMenuContainer} ${isOpen ? css.open : ''}`}>
      <div className={`${css.mobileMenuWrapper}`}>
        <div className={`${css.mobileMenu}  ${isOpen ? css.open : ''}`}>
          <ul className={`container ${css.navList}`}>
            <li className={css.navItem}>
              <Link href="#howWeWo rk" className={css.navLink}>
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
              <Link href={CONTACT_PHONE_LINK} className={css.navLink}>
                Телефон
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                href={CONTACT_WHATS_APP_LINK}
                target="_blanket"
                className={css.navLink}
              >
                WhatsApp
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href={CONTACT_EMAIL_LINK} className={css.navLink}>
                Email
              </Link>
            </li>
          </ul>

          {/* <Navigation handleClick={handleClick} variant="mobile-menu" /> */}
        </div>
      </div>
    </div>
  );
}
