import { useEffect, useState } from "react";

export const useInViewport = (targetRef, rootMargin = "200px") => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [rootMargin, targetRef]);

  return isInViewport;
};
