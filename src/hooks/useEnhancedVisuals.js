import { useEffect, useState } from "react";

const interactionEvents = ["pointerdown", "keydown", "scroll", "touchstart"];

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const hasConstrainedConnection = () =>
  Boolean(navigator.connection?.saveData);

const canRunEnhancedVisuals = (minWidth) =>
  window.innerWidth >= minWidth &&
  !prefersReducedMotion() &&
  !hasConstrainedConnection();

export const useEnhancedVisuals = ({ minWidth = 900 } = {}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canRunEnhancedVisuals(minWidth)) {
      return undefined;
    }

    const enable = () => setEnabled(true);

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, enable, {
        once: true,
        passive: eventName !== "keydown",
      });
    });

    return () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, enable);
      });
    };
  }, [minWidth]);

  return enabled;
};
