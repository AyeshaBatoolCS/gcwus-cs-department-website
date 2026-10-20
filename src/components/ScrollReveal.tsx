import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 28px, 0)';
      case 'down':
        return 'translate3d(0, -28px, 0)';
      case 'left':
        return 'translate3d(28px, 0, 0)';
      case 'right':
        return 'translate3d(-28px, 0, 0)';
      case 'none':
        return 'translate3d(0, 0, 0)';
      default:
        return 'translate3d(0, 28px, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
