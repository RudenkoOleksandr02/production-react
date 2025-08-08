export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const gerRouteMain = () => '/';
export const gerRouteAbout = () => '/about';
export const gerRouteProfile = (id: string) => `/profile/${id}`;
export const gerRouteArticles = () => '/articles';
export const gerRouteArticleDetails = (id: string) => `/articles/${id}`;
export const gerRouteArticleCreate = () => '/articles/new';
export const gerRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const gerRouteAdminPanel = () => '/admin';
export const gerRouteForbidden = () => '/forbidden';
