import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('You do not have access to this page')}
        </Page>
    );
});

export default ForbiddenPage;
