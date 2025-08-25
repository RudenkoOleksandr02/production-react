import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.America, content: Country.America },
    { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onHandlerChange = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const propsForListBox = {
        className,
        defaultValue: t('Select country'),
        label: t('Select country'),
        onChange: onHandlerChange,
        items: options,
        readonly,
        value,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...propsForListBox} />}
            off={<ListBoxDeprecated {...propsForListBox} />}
        />
    );
});
