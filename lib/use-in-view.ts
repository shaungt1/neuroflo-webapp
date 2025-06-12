"use client";

import { useState, useEffect, RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  amount?: "any" | "all" | number;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px", amount = "any" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        if (entry.isIntersecting && once) {
          observer.disconnect();
        }
      },
      {
        rootMargin: margin,
        threshold: typeof amount === "number" ? amount : undefined,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, margin, amount]);

  return isInView;
}