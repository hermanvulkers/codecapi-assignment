import { act, renderHook } from '@testing-library/react';
import { useDebouncedCallback } from './use-debounced-callback';

jest.useFakeTimers();

describe('useDebouncedCallback', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should debounce function calls', () => {
    const callback = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current('test');
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test');
  });

  it('should cancel previous calls when called multiple times', () => {
    const callback = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current('first');
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      result.current('second');
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      result.current('third');
    });

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('third');
  });

  it('should handle multiple arguments', () => {
    const callback = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current('arg1', 'arg2', 'arg3');
    });

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
  });

  it('should cleanup timeout on unmount', () => {
    const callback = jest.fn();
    const delay = 500;

    const { result, unmount } = renderHook(() =>
      useDebouncedCallback(callback, delay)
    );

    act(() => {
      result.current('test');
    });

    unmount();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should handle zero delay', () => {
    const callback = jest.fn();
    const delay = 0;

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current('test');
    });

    act(() => {
      jest.advanceTimersByTime(0);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test');
  });

  it('should handle function without arguments', () => {
    const callback = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current();
    });

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith();
  });
});
