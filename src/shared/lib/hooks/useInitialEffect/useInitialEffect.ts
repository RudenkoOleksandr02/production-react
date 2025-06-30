import { useEffect } from 'react';

export function useInitialEffect(callback: VoidFunction) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
