import Image from 'next/image';
import css from './OurWorks.module.css';

export default function OurWorks() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.sectionTitle}>Наши работы</h2>
        <ul className={css.worksList}>
          <li className={css.workItem}>
            <Image
              src="/img/ourWorks/image-1.png"
              alt="women"
              width={335}
              height={335}
              className={css.workImage}
            />
          </li>

          <li className={css.workItem}>
            <Image
              src="/img/ourWorks/image-2.png"
              alt="women"
              width={335}
              height={335}
              className={css.workImage}
            />
          </li>

          <li className={css.workItem}>
            <Image
              src="/img/ourWorks/image-3.png"
              alt="women"
              width={335}
              height={335}
              className={css.workImage}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
