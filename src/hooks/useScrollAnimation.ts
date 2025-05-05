import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (isVisible) {
      node.classList.add('is-visible');
    } else {
      node.classList.remove('is-visible'); // Optional: remove when not visible
    }
  }, [isVisible]);

  return { ref, isVisible };
};
