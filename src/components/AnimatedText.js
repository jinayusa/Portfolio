// AnimatedText.js
import React, { useEffect, useRef, useState } from 'react';
import { AnimatedDiv } from './styles';

const AnimatedText = ({ children, delay = '0s' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <AnimatedDiv ref={ref} visible={visible} delay={delay}>
      {children}
    </AnimatedDiv>
  );
};

export default AnimatedText;
