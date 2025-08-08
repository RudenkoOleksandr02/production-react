import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
        fallbackInverted,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={style}
        />
    );
};
