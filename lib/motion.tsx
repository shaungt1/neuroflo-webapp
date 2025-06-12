"use client";

import React from 'react';

// This is a simplified motion library to add basic animations
// without adding the full framer-motion dependency

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ initial, animate, transition, className, style, children, ...props }, ref) => {
      const [mounted, setMounted] = React.useState(false);
      const initialStyle = React.useRef(initial);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      const combinedStyle = React.useMemo(() => {
        if (!mounted) {
          return {
            ...style,
            opacity: initial?.opacity ?? 1,
            transform: `translate3d(${initial?.x || 0}px, ${initial?.y || 0}px, 0) scale(${initial?.scale || 1})`,
            transition: 'none',
          };
        }
        
        return {
          ...style,
          opacity: animate?.opacity ?? 1,
          transform: `translate3d(${animate?.x || 0}px, ${animate?.y || 0}px, 0) scale(${animate?.scale || 1})`,
          transition: transition ? 
            `all ${transition.duration || 0.3}s ${transition.ease || 'cubic-bezier(0.4, 0, 0.2, 1)'} ${transition.delay || 0}s` : 
            'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s',
        };
      }, [mounted, initial, animate, transition, style]);
      
      return (
        <div
          ref={ref}
          className={className}
          style={combinedStyle}
          {...props}
        >
          {children}
        </div>
      );
    }
  ),
};