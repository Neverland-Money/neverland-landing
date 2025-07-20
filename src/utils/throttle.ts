/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * @param func The function to throttle
 * @param wait The number of milliseconds to wait between invocations
 */
export function throttle<T extends (...args: unknown[]) => R, R>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => R | undefined {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastCallTime = 0;
  let lastResult: R | undefined = undefined;

  return function (...args: Parameters<T>): R | undefined {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    // Store the latest arguments
    lastArgs = args;

    // If we're not waiting for a timeout and enough time has passed
    if (timeout === null && timeSinceLastCall >= wait) {
      lastCallTime = now;
      lastResult = func(...args);
      return lastResult;
    } else if (timeout === null) {
      // Schedule a timeout to call the function later
      timeout = setTimeout(() => {
        lastCallTime = Date.now();
        timeout = null;

        if (lastArgs) {
          lastResult = func(...lastArgs);
        }
      }, wait - timeSinceLastCall);
    }

    // Return the last result for throttled calls
    return lastResult;
  };
}
