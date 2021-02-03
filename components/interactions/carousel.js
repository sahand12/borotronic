import { useState, useEffect } from 'react';
import styles from './carousel.module.scss';

export function Carousel({
  delay,
  children,
  width,
  count,
  containerClassName,
  innerContainerClassName,
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((offset - width) % (count * width));
    }, delay);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <div
        className={`${styles.innerContainer} ${innerContainerClassName}`}
        style={{ left: offset }}
      >
        {children}
      </div>
    </div>
  );
}
