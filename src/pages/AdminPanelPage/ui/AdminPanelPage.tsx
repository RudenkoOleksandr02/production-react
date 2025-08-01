import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Admin panel page')}
        </Page>
    );
});

export default AdminPanelPage;
