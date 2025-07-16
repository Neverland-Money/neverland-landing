/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * @param func The function to throttle
 * @param wait The number of milliseconds to wait between invocations
 */
export function throttle<
  TArgs extends unknown[],
  TResult,
  T extends (...args: TArgs) => TResult,
>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastCallTime = 0;

  return function (...args: Parameters<T>): void {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    // Store the latest arguments
    lastArgs = args;

    // If we're not waiting for a timeout and enough time has passed
    if (timeout === null && timeSinceLastCall >= wait) {
      lastCallTime = now;
      func(...args);
    } else if (timeout === null) {
      // Schedule a timeout to call the function later
      timeout = setTimeout(() => {
        lastCallTime = Date.now();
        timeout = null;

        if (lastArgs) {
          func(...lastArgs);
        }
      }, wait - timeSinceLastCall);
    }
  };
}
