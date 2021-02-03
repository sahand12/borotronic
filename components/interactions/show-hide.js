import { useState, useEffect } from 'react';
import cs from 'classnames';

export function Hide({ children, delay, visibility }) {
  const [display, setDisplay] = useState(visibility);

  useEffect(() => {
    if (visibility === false) {
      const timeoutId = setTimeout(() => setDisplay(false), delay || 100);
      return () => clearTimeout(timeoutId);
    }
    setDisplay(true);
  }, [visibility]);

  return (
    <div
      className={cs('transition-opacity duration-100', {
        'opacity-0': !visibility,
        'opacity-100': visibility,
      })}
      style={display ? { display: 'block' } : { display: 'none' }}
    >
      {children}
    </div>
  );
}
