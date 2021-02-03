import { MegaMenuContainer } from '../main-nav';
import { CATEGORIES } from '../../data/categories';
import { Carousel } from '../interactions/carousel';
import styles from './hero.module.scss';

export function Hero() {
  return (
    <div className={`${styles.hero} w-300 mx-auto flex`} dir="ltr">
      <MegaMenuContainer categories={CATEGORIES} />

      {/*  Carousel */}
      <Features />
    </div>
  );
}

function Features() {
  return (
    <Carousel
      delay={4000}
      count={4}
      width={944}
      containerClassName={styles.carouselContainer}
      innerContainerClassName={styles.carouseInnerContainer}
    >
      <div className={styles.carouselSlide}>
        <p className="h-full text-center bg-blue-100 text-gray-700 flex items-center justify-center">
          طراحی و پشتیبانی توسط مهندسان ایرانی
        </p>
      </div>
      <div className={styles.carouselSlide}>
        <p className="h-full text-center bg-yellow-100 text-gray-700 flex items-center justify-center">
          <span>واحد بازرگانی تأمین قطعات وتجهیزات الکترونیکی و مخابراتی</span>
        </p>
      </div>
      <div className={styles.carouselSlide}>
        <p className="h-full text-center bg-red-100 text-gray-700 flex items-center justify-center">
          <span>واحد طراحی، ساخت و تولید عناصر ماکروویوی و مخابراتی</span>
        </p>
      </div>
      <div className={styles.carouselSlide}>
        <p className="h-full text-center bg-green-100 text-gray-700 flex items-center justify-center">
          <span>واحد تست و اندازه‌گیری</span>
        </p>
      </div>
    </Carousel>
  );
}
