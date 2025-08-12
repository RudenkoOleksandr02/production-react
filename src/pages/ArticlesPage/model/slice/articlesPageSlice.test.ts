import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
    ArticleBlockType,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

const articles: Article[] = [
    {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [ArticleType.IT],
        user: {
            id: '1',
            username: 'user',
        },
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.CODE,
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: '5',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
        ],
    },
    {
        id: '2',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [ArticleType.IT],
        user: {
            id: '1',
            username: 'user',
        },
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.CODE,
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: '5',
                type: ArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
        ],
    },
];

describe('articlesPageSlice.test', () => {
    test('test set view', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.SMALL,
        };

        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setView(ArticleView.BIG),
            ),
        ).toEqual({ view: ArticleView.BIG });
    });
    test('test set page', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            page: 2,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setPage(3),
            ),
        ).toEqual({ page: 3 });
    });
    test('test set order', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            order: 'desc',
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setOrder('asc'),
            ),
        ).toEqual({ order: 'asc' });
    });
    test('test set search', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            search: '',
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setSearch('text'),
            ),
        ).toEqual({ search: 'text' });
    });
    test('test set sort', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            sort: ArticleSortField.CREATED,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setSort(ArticleSortField.TITLE),
            ),
        ).toEqual({ sort: ArticleSortField.TITLE });
    });
    test('test set type', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            type: ArticleType.ALL,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setType(ArticleType.IT),
            ),
        ).toEqual({ type: ArticleType.IT });
    });
    test('test init state', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.BIG,
            limit: 4,
            _inited: false,
        };
        localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.SMALL);

        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.initState(),
            ),
        ).toEqual({ view: ArticleView.SMALL, limit: 9, _inited: true });
    });
    test('test fetch articles list pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: 'error',
            entities: {
                1: articles[0],
                2: articles[1],
            },
            ids: ['1', '2'],
        };

        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.pending('', { replace: true }),
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
            entities: {},
            ids: [],
        });
    });
    test('test fetch articles list fulfilled', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: true,
            entities: {},
            ids: [],
            hasMore: true,
        };

        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.fulfilled(articles, '', { replace: true }),
            ),
        ).toEqual({
            entities: {
                1: articles[0],
                2: articles[1],
            },
            ids: ['1', '2'],
            isLoading: false,
            hasMore: false,
        });
    });
});
