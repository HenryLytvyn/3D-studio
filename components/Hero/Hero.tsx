import Link from 'next/link';
import css from './Hero.module.css';
import { CONTACT_WHATS_APP_LINK } from '@/lib/constants';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className="container">
        <h1 className={css.mainTitle}>3D-печать на заказ в Лондоне</h1>
        <p className={css.text}>
          Печатаем всё, кроме денег. Работаем как с небольшими заказами, так и с
          более сложными проектами.
        </p>
        <div className={css.LinksWrapper}>
          <Link href="#request" className={css.requestLink}>
            Оставить заявку
          </Link>
          <Link
            href={CONTACT_WHATS_APP_LINK}
            target="_blanket"
            className={css.whatsAppLink}
          >
            Написать в WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
