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

export const useEnhancedVisuals = ({
  minWidth = 0,
  desktopIdleTimeout = 1800,
  mobileIdleTimeout = 6000,
} = {}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canRunEnhancedVisuals(minWidth)) {
      return undefined;
    }

    let timeoutId;
    let idleId;

    const clearScheduledEnable = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };

    const enable = () => {
      clearScheduledEnable();
      setEnabled(true);
    };

    const scheduleIdleEnable = () => {
      if (window.innerWidth < 768) {
        timeoutId = window.setTimeout(() => {
          if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(enable, {
              timeout: desktopIdleTimeout,
            });
            return;
          }

          enable();
        }, mobileIdleTimeout);
        return;
      }

      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enable, {
          timeout: desktopIdleTimeout,
        });
        return;
      }

      timeoutId = window.setTimeout(enable, desktopIdleTimeout);
    };

    scheduleIdleEnable();

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, enable, {
        once: true,
        passive: eventName !== "keydown",
      });
    });

    return () => {
      clearScheduledEnable();

      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, enable);
      });
    };
  }, [desktopIdleTimeout, minWidth, mobileIdleTimeout]);

  return enabled;
};
