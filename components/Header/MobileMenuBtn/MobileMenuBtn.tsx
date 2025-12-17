'use client';

import { useMobileMenuOpen } from '@/lib/store/MobileMenuStore';
import css from './MobileMenuBtn.module.css';

export default function MobileMenuBtn() {
  const isMobileMenuOpen = useMobileMenuOpen(state => state.isMobileMenuOpen);
  const setIsMobileMenuOpen = useMobileMenuOpen(
    state => state.setIsMobileMenuOpen
  );
  const closeMobileMenu = useMobileMenuOpen(state => state.closeMobileMenu);

  return (
    <button
      onClick={setIsMobileMenuOpen}
      className={css.button}
      aria-label="Мобильное меню"
    >
      <div className={`${css.navIcon} ${isMobileMenuOpen ? css.open : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
