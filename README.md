### Зміст

1. [Огляд проєкту](#огляд-проєкту)
2. [Початок роботи](#початок-роботи)
3. [Доступні команди](#доступні-команди)
4. [Архітектура проєкту](#архітектура-проєкту)
5. [Shared layer](#shared-layer)
6. [Лінтинг і якість коду](#лінтинг-і-якість-коду)
7. [Тестування](#тестування)
8. [Storybook](#storybook)
9. [Інтернаціоналізація](#інтернаціоналізація)
10. [Рівень даних](#рівень-даних)
11. [Фічефлаги](#фічефлаги)
12. [Робота з фічефлагами](#робота-з-фічефлагами)
13. [Сутності і фічі](#сутності-і-фічі)
14. [Файли конфігурації](#файли-конфігурації)
15. [CI-пайплайн і прекомміт-хуки](#ci-пайплайн-і-прекомміт-хуки)
16. [Обробка даних](#обробка-даних)

---

### Огляд проєкту

**Демо:** https://gleeful-baklava-85a9ba.netlify.app (username: admin, password: 123)

Цей проєкт я зробив як демонстрацію повного циклу розробки: від налаштування webpack, архітектури до редизайну та деплою. 
Він має 3 теми, 3 мови та дві дизайн-системи (стара та нова), які можна переключати.

Скріншоти:

| ![img1](https://res.cloudinary.com/dbie9rxsq/image/upload/v1756911573/1_megdxy.png) | ![img2](https://res.cloudinary.com/dbie9rxsq/image/upload/v1756911572/4_c0u9t8.png) |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **Старий дизайн з темною темою**                                                    | **Дизайн зі світлою темою**                                                         |
| ![img3](https://res.cloudinary.com/dbie9rxsq/image/upload/v1756911573/2_qccbzq.png) | ![img4](https://res.cloudinary.com/dbie9rxsq/image/upload/v1756911572/3_o5idj7.png) |
| **Дизайн із темною темою**                                                          | **Дизайн з помаранчевою темою**                                                     |


Цей проєкт — React-додаток на базі Redux Toolkit і TypeScript, організований за архітектурою Feature-Sliced Design (FSD).
Код структуровано за шарами (`app`, `pages`, `widgets`, `features`, `entities`, `shared`) для модульності та зручності підтримки.
Додаток використовує динамічні модулі Redux: редʼюсери фіч та сутностей підключаються під час виконання через `DynamicModuleLoader` , щоб уникнути монолітного store.
Також для роботи з API застосовується `RTK Query` — ендпоінти інжектуються в єдиний API-зріз.

Для забезпечення якості коду налаштовано повне тестування та строгий лінтинг.
Зокрема, використовуються `Jest` для unit-тестів, `Cypress` для e2e-тестів і `Storybook` + `Loki` для візуальної регресії.
Лінтинг організовано через `ESLint` (з конфігурацією Airbnb), `Prettier` та `Stylelint`.

**Основні технології:**

* babel
* webpack
* vite
* eslint
* stylelint
* prettier
* storybook + loki
* jest
* cypress
* react
* reduxjs/toolkit
* typescript
* i18next

---

### Початок роботи

Кроки для локального запуску проєкту:

1. **Вимоги:** встановіть Node.js (версії 17+) та `npm` або `Yarn`.
2. **Клонування репозиторію:**
    ```bash
    git clone https://github.com/RudenkoOleksandr02/production-react.git
    cd production-react
    ```
3. **Встановлення залежностей:** `npm install` або `yarn`.
4. Запуск додатку та mock-сервера:
   * `npm run start:dev` — одночасно запускає фронтенд (Webpack Dev Server) та JSON-сервер.
   * Альтернатива: `npm run start:dev:vite` — запускає фронтенд (Vite Dev Server) та JSON-сервер одночасно.
5. **Відкриття додатку:**
   * Фронтенд: http://localhost:3000
   * Mock JSON API: http://localhost:8000 (за замовчуванням)
6. **Продакшн-збірка:** `npm run build:prod` — створює оптимізований бандл у директорії `/build`.

---

### Доступні команди

Нижче наведені основні npm-скрипти проєкту (запуск через `npm run <script>` або `yarn <script>`):

| Команда                                         | Опис                                                            |
|-------------------------------------------------|-----------------------------------------------------------------|
| `npm run start`                                 | Запуск додатку через Webpack Dev Server (порт 3000).            |
| `npm run start:vite`                            | Запуск додатку через Vite Dev Server (порт 3000).               |
| `npm run start:dev:server`                      | Запуск mock JSON API-серверу (читає `db.json`).                 |
| `npm run start:dev`                             | Запуск фронтенду (Webpack) і JSON-сервера одночасно.            |
| `npm run start:dev:vite`                        | Запуск фронтенду (Vite) і JSON-сервера одночасно.               |
| `npm run build:prod`                            | Продакшн-збірка Webpack (вихід у `/build`).                     |
| `npm run build:dev`                             | Дев-збірка Webpack (не мініфікована).                           |
| `npm run prettier`                              | Форматування коду `Prettier`.                                   |
| `npm run lint:ts`                               | Лінтинг TypeScript/TSX через `ESLint`.                          |
| `npm run lint:ts:fix`                           | `ESLint` з `--fix` для автоматичного виправлення.               |
| `npm run lint:scss`                             | Лінтинг SCSS/CSS через `Stylelint`.                             |
| `npm run lint:scss:fix`                         | `Stylelint` з `--fix` для автоматичного виправлення.            |
| `npm run test:unit`                             | Unit-тести з `Jest` + React Testing Library.                    |
| `npm run test:e2e`                              | Запуск `Cypress` для e2e-тестування.                            |
| `npm run test:ui`                               | Збірка Storybook і запуск візуальних тестів (`Loki`).           |
| `npm run test:ui:ok`                            | Підтвердження/оновлення еталонних знімків для `Loki`.           |
| `npm run test:ui:ci`                            | Запуск візуальних тестів у CI.                                  |
| `npm run visual:report`                         | Генерація повного звіту по скриншотних тестах.                  |
| `npm run visual:report:json`                    | Генерація JSON-звіту по скриншотних тестах.                     |
| `npm run visual:report:html`                    | Генерація HTML-звіту по скриншотних тестах.                     |
| `npm run storybook`                             | Запуск Storybook (порт 6006).                                   |
| `npm run storybook:build`                       | Збірка статичного Storybook у `/storybook-static`.              |
| `npm run generate:slice <layer> <sliceName>`    | Кастомний скрипт для генерації нового FSD-слайсу.               |
| `npm run postinstall`                           | Очищення кешу `node_modules` (автоматично після `npm install`). |
| `npm run remove-feature <featureName> <on/off>` | Кастомний скрипт для видалення фічі (очищує код фічі).          |

---

### Архітектура проєкту

Додаток структуровано відповідно до методології Feature-Sliced Design (FSD). Основні шари проєкту:

* **App** (`/src/app`): глобальна конфігурація (наприклад, `App.tsx`), провайдери, `ErrorBoundary`, `StoreProvider` з конфігурацією сховища та менеджером редʼюсерів.
* **Pages** (`/src/pages`): сторінки вищого рівня (наприклад, `ArticlesPage`, `ArticleDetailsPage`), що збираються з віджетів, фіч та сутностей. 
Часто використовують `DynamicModuleLoader` для підключення відповідних редʼюсерів при монтуванні сторінки.
* **Widgets** (`/src/widgets`): повторно використовувані UI-блоки (наприклад, `Navbar`, `Sidebar`, `PageError`), які комбінують функціональність фіч та сутностей.
* **Features** (`/src/features`): логіка та UI, що відносяться до конкретних сценаріїв (наприклад, `AuthByUserName`, `AddCommentForm`, `ArticleRating`).
* **Entities** (`/src/entities`): доменні сутності (моделі) додатку (наприклад, `Article`, `Comment`, `User`, `Profile`, `Notification`).
* **Shared** (`/src/shared`): узагальнені компоненти, хуки, утиліти та конфігурація, не привʼязані до конкретної фічі або сутності.

`DynamicModuleLoader` додає редʼюсери при монтуванні компонента і, за потребою, видаляє їх при розмонтуванні.
Це зменшує обсяг коду при першому завантаженні.
Маршрутизація реалізована за допомогою `React Router` — `AppRouter` у `app/providers/router` визначає шляхи й конфігурацію роутінгу.

---

### Shared layer

Рівень `shared` містить повторно використовувані частини додатку:

* **UI-компоненти** (`shared/ui`): бібліотека спільних елементів (наприклад, кнопки, інпути, картки, лоадери тощо). 
Для деяких компонентів є версії `deprecated` та `redesigned`, які перемикаються через фічефлаг `isAppRedesigned`. 
Приклади компонентів: `Button`, `Card`, `Avatar`, `Skeleton`, `Tabs`, `Text`.

* **Шаблони** (`shared/layouts`): шаблони для розміщення контенту у потрібних областях додатку згідно з design-системою.

* **Константи** (`shared/const`): загальні константи додатку: ключі для `localStorage` (`localstorage.ts`), маршрути (`router.ts`), теми оформлення (`theme.ts`).

* **API** (`shared/api`):
  * `api.ts` — налаштований екземпляр axios з базовим URL та автоматичним додаванням заголовка `Authorization` з `localStorage`.
  * `rtkApi.ts` — базовий RTK Query API з заданим базовим URL та заголовком `Authorization` з `localStorage`.

* **Типи** (`shared/types`): загальні TypeScript-типи, що використовуються у додатку.

* **Конфіг** (`shared/config`): 
  * `/i18n` — конфігурація інтернаціоналізації для бізнес-логіки (`i18n.ts`) та для unit-тестів (`i18nForTests.ts`).
  * `/storybook` — декоратори для Storybook:
    * `FeaturesFlagsDecorator` — встановлює задані фічефлаги перед рендером сторіс.
    * `NewDesignDecorator` — вмикає флаг `isAppRedesigned` і обгортає сторіс у контейнер `.app_redesigned` (для нових стилів).
    * `RouterDecorator` — обгортає сторіс у `BrowserRouter` (необхідно для компонентів, що використовують маршрутизацію).
    * `StoreDecorator` — обгортає сторіс у `StoreProvider` з заданим `initialState` і асинхронними редʼюсерами.
    * `StyleDecorator` — гарантує імпорт глобальних стилів для сторіс.
    * `SuspenseDecorator` — обгортає сторіс у `React.Suspense`.
    * `ThemeDecorator` — обгортає сторіс у `ThemeProvider` і додає клас `.app` з поточною темою.
  * `/tests` — утиліти для unit-тестів:
    * `componentRender` — утиліта для render з `@testing-library/react` із набором провайдерів (`Router`, `Store`, `i18n`, `Theme`)
    * `TestAsyncThunk` — тестовий помічник для unit-тестування async thunks: мокає `axios` та інжектує `dispatch`/`getState`/`api`/`navigate`.

* **Хуки** (`shared/lib/hooks`, `shared/lib/router`):
  * `useAppDispatch` — типізований Redux-хук для `useDispatch`.
  * `useInitialEffect` — ефект, що виконується лише при першому рендері (не запускається у Storybook чи Jest).
  * `useDebounce`, `useThrottle` — утиліти для дебаунсу та тротлінгу функцій.
  * `useInfiniteScroll` — хук для реалізації безкінечного скролінгу.
  * `useModal` — хук для керування станом модальних компонентів (`Drawer`/`Modal`).
  * `useTheme` — хук для перемикання теми (dark ↔ light ↔ orange).
  * `useHover` — повертає стан наведення та бінди для `onMouseEnter`/`onMouseLeave`.
  * `useRouteChange` — визначає поточний маршрут і повертає відповідне значення з `enum AppRoutes`.

* **Утиліти/провайдери** (`shared/lib/components`, `shared/lib/classNames`, `shared/lib/render`, `shared/lib/url`):
  * `DynamicModuleLoader` — компонент для динамічної інʼєкції редʼюсерів.
  * `AnimationProvider` — лениво завантажує бібліотеки анімацій і передає їх через контекст.
  * `classNames` — хелпер для умовного обʼєднання CSS-класів.
  * `forceUpdate` — містить `ForceUpdateProvider` і хук `useForceUpdate`:
    * `ForceUpdateProvider` — провайдер, що дозволяє вручну ініціювати повне оновлення додатку.
    * `useForceUpdate` — хук, що повертає функцію примусового оновлення.
  * `addQueryParams` — утиліти для роботи з query-параметрами в URL:
    * `getQueryParams` — повертає рядок query-параметрів, обʼєднуючи поточні параметри з новими.
    * `addQueryParams` — додає або оновлює query-параметри в URL без перезавантаження сторінки.

* Фічефлаги (`shared/lib/features`):
  * `featureFlagsApi` — RTK Query-мутація для оновлення фічефлагів користувача (PATCH `/users/:userId`).
  * `ToggleFeatures` — компонент для умовного рендерингу на основі фічефлагів.
  * `setGetFeatures` — модуль для керування фічефлагами (`set`/`get`/`getAll`).
  * `toggleFeatures` — утиліта для перемикання поведінки в коді на основі фічефлагів.
  * `updateFeatureFlags` — оновлює фічефлаги користувача на сервері та перезавантажує сторінку.

* Утиліти для селекторів і слайсів (`shared/lib/store`):
  * `buildSelector` — утиліта, що створює хук `useSelector` на основі селектора за станом (з додатковими аргументами).
  * `buildSlice` — обгортка над `createSlice`, що повертає слайс і хук `useActions` для зв’язування `action` `creators` з `dispatch`.

* Контекст (`shared/lib/context`): 
  * `ThemeContext` — контекст поточної теми, містить значення `theme` і функцію `setTheme`.

---

### Лінтинг і якість коду

У проєкті використовуються такі інструменти для забезпечення якості коду:

* **ESLint + Airbnb:** конфігурація `ESLint` з правилами Airbnb для React та TypeScript (`.eslintrc.js`).
* **FSD Path Linting:** [кастомний плагін](https://github.com/RudenkoOleksandr02/eslint-plugin-fsd-paths) `@sashar/eslint-plugin-fsd-paths`
для перевірки коректності шляхів імпорту за правилами FSD.
* **i18next ESLint-правило:** заборона на літеральні рядки в JSX (всі відображувані тексти передаються через `t('...')`).
* **Stylelint:** лінтинг SCSS-файлів.
* **Prettier:** автоформатування коду (скрипт `npm run prettier`).
* **Husky + lint-staged:** прекомміт-хуки, що запускають форматування та лінтинг змінених файлів перед комітом.

---

### Тестування

Покриття тестами організовано на кількох рівнях:

* **Unit-тести (Jest + React Testing Library):** конфігурація у `config/jest`. Тести знаходяться у файлах `*.test.tsx`. 
Для зручності тестування використовуються утиліти з `shared/config/tests` (наприклад, `componentRender` для рендерингу компонента з 
провайдерами та `TestAsyncThunk` для тестування асинхронних thunk). Запуск:
    ```bash
    npm run test:unit
    ```
* **E2E-тести (Cypress):** конфігурація у `cypress.config.ts`. Тестування користувацьких сценаріїв у браузері. Локальний запуск:
    ```bash
    npm run test:e2e
    ```
* **Візуальні тести (Storybook + Loki):** конфігурація у `config/storybook`. Storybook використовується для візуальної перевірки 
компонентів, Loki робить скриншоти і порівнює їх з еталонами. Для запуску потрібен запущений Docker:
    ```bash
    npm run test:ui
    ```
  Для підтвердження або оновлення нових еталонних скриншотів:
    ```bash
    npm run test:ui:ok
    ```  
  У CI використовується:
    ```bash
    npm run test:ui:ci
    ```  

---

### Storybook

`Storybook` налаштовано для розробки та документації UI-компонентів:

* **Файли історій:** кожен компонент має файл `*.stories.tsx` поруч з вихідником.
* **Конфігурація:** основний конфіг знаходиться у `config/storybook/main.ts`, конфіг попереднього перегляду — у `preview.js`.
* **Глобальні декоратори:** використовуються декоратори `StyleDecorator`, `ThemeDecorator`, `RouterDecorator`, `SuspenseDecorator`, 
`FeaturesFlagsDecorator` (описані в `shared/config/storybook`).
* **Запуск Storybook:** `npm run storybook`, потім відкрити http://localhost:6006.
* **Збірка Storybook:** `npm run storybook:build`, збірка буде виведена в директорію `/storybook-static`.

---

### Інтернаціоналізація

Для мультиязичності використовується бібліотека `react-i18next`:

* **Конфігурація:** налаштована у файлі `shared/config/i18n/i18n.ts`.
* **Використання:** у компонентах застосовуються хук `useTranslation()` і функція `t('ключ')` для перекладу. Ключі перекладів організовані 
за фічами та сторінками.
* **Файли перекладів:** зберігаються у папці `public/locales/{lang}/`.
* **Лінтинг:** правило ESLint забороняє літеральні рядки в JSX — всі видимі тексти мають бути в обгортці `t(...)`.
* **Додавання мови:** достатньо додати JSON-файли з перекладами в `public/locales/<lang>`.

---

### Рівень даних

Стан додатку та взаємодія із сервером реалізовані за допомогою Redux Toolkit та RTK Query:

* **Конфігурація стора:** у `app/providers/StoreProvider` створюється стор за допомогою `configureStore` і `reducerManager`. Статичні редʼюсери 
(наприклад, `counter`, `user`) підключаються одразу. RTK Query підключається як `rtkApi.reducer` і `rtkApi.middleware`. Провайдер стора обгортає 
весь додаток.
* **Динамічні редʼюсери:** `reducerManager` дозволяє `DynamicModuleLoader` підключати редʼюсери під час виконання (і видаляти їх при 
розмонтуванні за потребою), що скорочує обʼєм початкового коду.
* **Thunk Extra Arg:** для асинхронних операцій використовується екземпляр Axios (`$api`) з базовим URL (`__API__`) і автоматичним додаванням 
токена з `localStorage`. У тестах для цього застосовується мок Axios.
* **RTK Query:** базовий `rtkApi` створюється через `createApi` з `fetchBaseQuery`. Ендпоінти додаються через `rtkApi.injectEndpoints()` у відповідних
фічах/сутностях (наприклад, `userApi`, `articleApi`, `profileApi` тощо). Інʼєкція обʼєднує ендпоінти в спільний `rtkApi.reducerPath`. 
У компонентах використовуються автоматично згенеровані хуки, наприклад, `useGetNotificationsQuery` або `useUpdateProfileMutation`.
* **Селектори:** поряд з селекторами RTK Query застосовуються селектори для зрізів стану (наприклад, `getProfileData`, `getArticles` тощо).

---

### Фічефлаги

У проєкті реалізована система фічефлагів:

* **Типи флагів:** приклади флагів — `isArticleRatingEnabled`, `isCounterEnabled`, `isAppRedesigned`.
* **Ініціалізація:** початкові значення флагів завантажуються з `localStorage` (ключ `LOCAL_STORAGE_LAST_DESIGN_KEY` використовується для перемикання дизайну).
* **Зберігання:** флаги зберігаються в памʼяті (модуль `featureFlags`) і доступні через функцію `getFeatureFlag('...')`; встановлюються 
через `setFeatureFlags({ ... })`.
* **Збереження на сервері:** є RTK Query-ендпоінт `updateFeatureFlags`, що виконує PATCH `/users/:id` з тілом `{ features }` — це дозволяє 
зберігати вибрані налаштування фічефлагів на боці сервера.
* **Використання:** фічефлаги змінюють поведінку компонентів. Наприклад, флаг `isAppRedesigned` перемикає між компонентами з 
`shared/ui/deprecated` та `shared/ui/redesigned`. У Storybook застосовується `FeaturesFlagsDecorator` для попереднього перегляду компонентів 
за різних значень флагів.
* **Навіщо потрібні:** фічефлаги дозволяють розробляти нову функціональність паралельно зі старою, не видаляючи одразу legacy-код. 
Це спрощує поступовий перехід на нові рішення.

---

### Робота з фічефлагами

Фічефлаги слід використовувати через утиліту `toggleFeatures`:
  ```tsx
    toggleFeatures({
        name: 'назваФлагу', 
        on: () => {
            // код, що виконується при ввімкненому флагу
        },
        off: () => {
            // код, що виконується при вимкненому флагу
        }
    })
  ```
або через компонент `ToggleFeatures`:
  ```tsx
    <ToggleFeatures
        feature="назваФлагу"
        on={ /* код, що виконується при ввімкненому флагу */ }
        off={/* код, що виконується при вимкненому флагу */}
    />
  ```

Це дозволяє перемикати поведінку функцій чи компонент залежно від стану флагу. Щоб автоматично 
видалити фічу з коду, можна скористатися скриптом `remove-feature.ts`, який приймає два аргументи:
1. Назву флагу, що видаляється.
2. Стан (`on`/`off`), який вказує, яка версія коду залишиться.

---

### Сутності і фічі

#### Сутності (Entities):

* **Article:** список статей (`ArticleList` з безкінечним скролом), деталі статті (`ArticleDetails`), 
блоки коду всередині статті, система рейтингу.
* **Comment:** `CommentCard`, `CommentList` для відображення коментарів.
* **User:** аутентифікація, дані користувача.
* **Profile:** для картки профілю.
* **Notification:** сповіщення користувача.
* **Counter, Currency, Country:** приклади утилітарних сутностей (наприклад, типи валют і країн з відповідними селекторами).
* **Rating:** управління зірковими рейтингами (використовується і для статей, і для профілю).

#### Фічі (Features):

* **AuthByUserName** — форма логіна по імені користувача.
* **AddCommentForm** — форма додавання нового коментаря.
* **ArticleRating** — компонент рейтингу статті.
* **ArticleRecommendationsList** — відображення списку рекомендованих статей.
* **EditableProfileCard** — форма для редагування даних користувача.
* **ProfileRating** — рейтинг профілю користувача.
* **LangSwitcher** — перемикач мови додатку.
* **ThemeSwitcher** — перемикач теми оформлення.
* **UiDesignSwitcher** — перемикач нового/старого дизайну (флаг `isAppRedesigned`).
* **ArticleViewSelector**, **ArticleSortSelector**, **ArticleTypeTabs** — фільтри та перемикачі представлення списку статей.
* **AvatarDropdown**, **NotificationButton**, **ScrollToTopButton** — допоміжні UI-фічі (спливаюче меню 
з аватаром, кнопка сповіщень, кнопка прокрутки вгору тощо).

Кожна сутність чи фіча живе у своїй папці `/src/entities` чи `/src/features` зі власним UI 
та Redux-логікою, що спрощує масштабування проєкту і додавання нових можливостей.

---

### Файли конфігурації

Конфігураційні файли зосереджені в директорії `/config`:

* `config/babel` — налаштування Babel.
* `config/build` — конфігурація Webpack.
* `config/jest` — налаштування середовища для Jest.
* `config/storybook` — налаштування Storybook

Крім того:

* **Vite:** конфігурація у файлі `vite.config.ts`.
* **Cypress:** конфігурація у файлі `cypress.config.ts`.
* **Скрипти:** корисні скрипти для генерації коду, звітів і рефакторингу знаходяться в папці `scripts/**`.

---

### CI-пайплайн і прекомміт-хуки

* **GitHub Actions:** у папці `/.github/workflows` налаштовані workflow-и, які виконують повну 
перевірку проєкту при push/pull-request. Завдання включають: запуск тестів (unit, UI),
збірку додатку та Storybook, перевірки лінтингу (ESLint, Stylelint).
* **Husky:** прекомміт-хуки для локальної перевірки коду перед комітом. Лінтинг та форматування 
запускаються автоматично через `lint-staged`. Конфігурація Husky встановлюється скриптом `prepare` 
у `package.json`.

---

### Обробка даних

Для управління станом та взаємодії з сервером використовуються:

* **Redux Toolkit:** для роботи зі сховищем створюються зрізи (через `createSlice`) з опційною 
нормалізацією через `createEntityAdapter`.
* **RTK Query:** для спілкування з API (див. `shared/api/rtkApi.ts` — тут сконфігуровано базовий 
`fetchBaseQuery`). Ендпоінти інжектуються з фіч/сутностей в єдиний API-зріз.
* **DynamicModuleLoader:** для динамічного завантаження редʼюсерів за вимогою 
(`/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx`). Це дозволяє 
завантажувати код слайсів лише за потреби.

