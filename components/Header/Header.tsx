import css from './Header.module.css';
import Logo from '../Logo/Logo';
import MobileMenuBtn from './MobileMenuBtn/MobileMenuBtn';
import Link from 'next/link';
import SelectPrimary from '../SelectPrimary/SelectPrimary';

export default function Header() {
  return (
    <div className="container">
      <section className={css.header}>
        <Logo />
        <MobileMenuBtn />
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/" className={css.navLink}>
                Как мы работаем
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" className={css.navLink}>
                Наши работы
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" className={css.navLink}>
                Оставить заявку
              </Link>
            </li>
            <li className={css.navItem}>
              <SelectPrimary
                width={121}
                height={106}
                options={['Телефон', 'WhatsApp', 'Email']}
                placeholder="Контакты"
              />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
