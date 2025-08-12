import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * The hook that allows you to cancel a previous function call until delay has expired
 * @param callback
 * @param delay
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
