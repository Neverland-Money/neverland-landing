import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { throttle } from './throttle';

describe('throttle utility', () => {
  beforeEach(() => {
    // Setup fake timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Clean up
    vi.restoreAllMocks();
  });

  it('should call the function immediately on first call', () => {
    const mockFn = vi.fn();
    const throttled = throttle(mockFn, 100);

    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again if called within the wait period', () => {
    const mockFn = vi.fn();
    const throttled = throttle(mockFn, 100);

    throttled();
    throttled(); // This call should be ignored
    throttled(); // This call should be ignored

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait period with the latest arguments', () => {
    const mockFn = vi.fn();
    const throttled = throttle(mockFn, 100);

    throttled('first');
    expect(mockFn).toHaveBeenCalledWith('first');
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Call with different arguments during the wait period
    throttled('second');
    throttled('third'); // This should be the one used after timeout

    // Fast-forward time
    vi.advanceTimersByTime(100);

    // The function should have been called again with the latest arguments
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith('third');
  });

  it('should correctly handle the timing between calls', () => {
    const mockFn = vi.fn();
    const throttled = throttle(mockFn, 100);

    throttled(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance halfway through the wait period
    vi.advanceTimersByTime(50);
    throttled(2);
    expect(mockFn).toHaveBeenCalledTimes(1); // Still only called once

    // Advance past the wait period
    vi.advanceTimersByTime(50);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith(2);

    // Call again immediately after wait period
    throttled(3);
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenLastCalledWith(3);
  });
});
