export const performance = window.performance;

export function PerformanceObserver() {
  return {
    observe: () => {},
    disconnect: () => {}
  };
}
