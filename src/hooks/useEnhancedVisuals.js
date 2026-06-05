import { useEffect, useState } from "react";

const interactionEvents = ["pointerdown", "keydown", "scroll", "touchstart"];

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const hasConstrainedConnection = () =>
  Boolean(navigator.connection?.saveData);

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");

    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

const canRunEnhancedVisuals = (minWidth) =>
  window.innerWidth >= minWidth &&
  !prefersReducedMotion() &&
  !hasConstrainedConnection() &&
  supportsWebGL();

export const useEnhancedVisuals = ({ minWidth = 900 } = {}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canRunEnhancedVisuals(minWidth)) {
      return undefined;
    }

    const enable = () => setEnabled(true);
    const scheduleIdleEnable = () => {
      if ("requestIdleCallback" in window) {
        return window.requestIdleCallback(enable, { timeout: 2400 });
      }

      return window.setTimeout(enable, 1800);
    };

    const idleId = scheduleIdleEnable();

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, enable, {
        once: true,
        passive: eventName !== "keydown",
      });
    });

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }

      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, enable);
      });
    };
  }, [minWidth]);

  return enabled;
};
