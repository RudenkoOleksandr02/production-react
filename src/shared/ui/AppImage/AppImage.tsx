import {
    ImgHTMLAttributes, memo, ReactNode, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return fallback ? <>{fallback}</> : null;
    }

    if (hasError) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return errorFallback ? <>{errorFallback}</> : null;
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />
    );
});
