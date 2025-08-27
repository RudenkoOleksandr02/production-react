import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('The page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('The page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/something',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect unauthorized user to home page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    /* test('Access to a closed page for an authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    }); */

    test('Access Denied (Missing Role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access granted (role present)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
