import Image from 'next/image';
import css from './HowWeWork.module.css';

export default function HowWeWork() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.sectionTitle}>Как мы работаем</h2>
        <ul className={css.stepsList}>
          <li className={css.stepItem}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="
                      /img/howWeWork/step-1-desktop.webp    1x,
                      /img/howWeWork/step-1-desktop@2x.webp  2x
                    "
              />
              <source
                media="(max-width: 1439.98px)"
                srcSet="
                      /img/howWeWork/step-1-mobile.webp    1x,
                      /img/howWeWork/step-1-mobile@2x.webp  2x
                    "
              />
              <img
                className={css.stepImage}
                src="/img/howWeWork/step-1-mobile.webp"
                alt="Женщина заполняет форму обратной связи"
              />
            </picture>

            {/* <Image
              className={css.stepImage}
              src="/img/howWeWork/step-1-mobile.png"
              alt="Девушка заполняет форму обратной связи"
              width={333}
              height={333}
            /> */}
            <div className={css.stepWrapperText}>
              <h3 className={css.stepTitle}>01. Получаем ваш запрос</h3>
              <p className={css.stepText}>
                Напишите нам в мессенджер или оставьте заявку через форму. Мы
                свяжемся с вами в течении дня.
              </p>
            </div>
          </li>

          <li className={css.stepItem}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="
                      /img/howWeWork/step-2-desktop.webp    1x,
                      /img/howWeWork/step-2-desktop@2x.webp  2x
                    "
              />
              <source
                media="(max-width: 1439.98px)"
                srcSet="
                      /img/howWeWork/step-2-mobile.webp    1x,
                      /img/howWeWork/step-12mobile@2x.webp  2x
                    "
              />
              <img
                className={css.stepImage}
                src="/img/howWeWork/step-2-mobile.webp"
                alt="Консультация в 3Д мастерской"
              />
            </picture>

            {/* <Image
              className={css.stepImage}
              src="/img/howWeWork/step-1.webp"
              alt="Девушка заполняет форму обратной связи"
              width={333}
              height={333}
            /> */}
            <div className={css.stepWrapperText}>
              {' '}
              <h3 className={css.stepTitle}>02. Обсуждаем детали</h3>
              <p className={css.stepText}>
                Согласовываем материал и сроки заказа. Если речь идёт о
                сломанной детали, она может понадобиться для снятия размеров.
              </p>
            </div>
          </li>

          <li className={css.stepItem}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="
                      /img/howWeWork/step-3-desktop.jpg    1x,
                      /img/howWeWork/step-3-desktop@2x.jpg  2x
                    "
              />
              <source
                media="(max-width: 1439.98px)"
                srcSet="
                      /img/howWeWork/step-3-mobile.jpg    1x,
                      /img/howWeWork/step-3-mobile@2x.jpg  2x
                    "
              />
              <img
                className={css.stepImage}
                src="/img/howWeWork/step-3-mobile.jpg"
                alt="Упаковка заказа"
              />
            </picture>

            {/* <Image
              className={css.stepImage}
              src="/img/howWeWork/step-1-mobile.png"
              alt="Девушка заполняет форму обратной связи"
              width={333}
              height={333}
            /> */}
            <div className={css.stepWrapperText}>
              <h3 className={css.stepTitle}>03. Печатаем и отправляем</h3>
              <p className={css.stepText}>
                Печатаем изделие и передаём его удобным способом. Самовывоз или
                доставка почтой.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
