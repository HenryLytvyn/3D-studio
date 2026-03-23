import { useLayoutEffect, useRef, useState } from 'react';

export function useAutoHeight<T extends HTMLElement>(deps: any[]) {
  const ref = useRef<T>(null);
  const prevHeightRef = useRef<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const isFirst = useRef(true);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ⛔️ ВАЖНО: временно отпускаем height
    el.style.height = 'auto';
    const nextHeight = el.scrollHeight;

    // первый рендер
    if (isFirst.current) {
      isFirst.current = false;
      prevHeightRef.current = nextHeight;
      setHeight(nextHeight);
      return;
    }

    const prevHeight = prevHeightRef.current ?? nextHeight;

    // фиксируем старую
    setHeight(prevHeight);

    // анимируем в новую
    requestAnimationFrame(() => {
      setHeight(nextHeight);
    });

    prevHeightRef.current = nextHeight;
  }, deps);

  return { ref, height };
}
