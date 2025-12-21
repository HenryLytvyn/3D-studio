import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import css from './Request.module.css';
import RequestForm from './RequestForm/RequestForm';

export default function Request() {
  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.contactInfoWrapper}>
          <h2 className={css.sectionTitle}>Оставить заявку</h2>
          <p className={css.text}>
            Вы можете связаться с нами любым удобным способом — через форму или
            напрямую.
          </p>
          <address className={css.address}>
            <ul className={css.addressList}>
              <li className={css.addressItem}>
                <Icon name="icon-email" className={css.addressIcon} />
                <Link
                  href="mailto:hello@3dprint.london"
                  className={css.addressLink}
                >
                  hello@3dprint.london
                </Link>
              </li>

              <li className={css.addressItem}>
                <Icon name="icon-phone" className={css.addressIcon} />
                <Link href="tel:+447404373041" className={css.addressLink}>
                  +44 740 43 73 041
                </Link>
              </li>

              <li className={css.addressItem}>
                <Icon name="icon-whatsapp" className={css.addressIcon} />
                <Link
                  href="https://wa.me/447404373041"
                  target="_blanket"
                  className={css.addressLink}
                >
                  +44 740 43 73 041
                </Link>
              </li>

              <li className={css.addressItem}>
                <Icon name="icon-geolocation" className={css.addressIcon} />
                <p className={css.addressLocation}>London, United Kingdom</p>
              </li>
            </ul>
          </address>
        </div>

        <RequestForm />
      </div>
    </section>
  );
}
