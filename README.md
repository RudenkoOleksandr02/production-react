## Project Overview

This project follows the **Feature-Sliced Design** methodology and consists of a backend server and a frontend application. It uses modern tools and practices for development, testing, and CI/CD.

---

### Table of Contents

1. [Getting Started](#getting-started)
2. [Available Scripts](#available-scripts)
3. [Project Architecture](#project-architecture)
4. [Internationalization](#internationalization)
5. [Testing](#testing)
6. [Linting](#linting)
7. [Storybook](#storybook)
8. [Configuration Files](#configuration-files)
9. [CI Pipeline & Pre-commit Hooks](#ci-pipeline--pre-commit-hooks)
10. [Data Handling](#data-handling)
11. [Entities & Features](#entities--features)

---

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Launch in development mode**

   * Frontend (webpack): `npm run start`
   * Frontend (Vite): `npm run start:vite`
   * Backend only: `npm run start:dev:server`
   * Full stack (webpack + server): `npm run start:dev`
   * Full stack (Vite + server): `npm run start:dev:vite`

3. **Build for production**

   ```bash
   npm run build:prod
   ```

4. **Build for development** (non-minified)

   ```bash
   npm run build:dev
   ```

---

## Available Scripts

| Command                      | Description                              |
| ---------------------------- | ---------------------------------------- |
| `npm run start`              | Launch frontend with webpack dev server  |
| `npm run start:vite`         | Launch frontend with Vite                |
| `npm run start:dev:server`   | Run backend server                       |
| `npm run start:dev`          | Run webpack frontend + backend           |
| `npm run start:dev:vite`     | Run Vite frontend + backend              |
| `npm run build:prod`         | Build in production mode                 |
| `npm run build:dev`          | Build in development mode (not minified) |
| `npm run lint:ts`            | Lint TypeScript files                    |
| `npm run lint:ts:fix`        | Auto-fix lint errors in TypeScript       |
| `npm run lint:scss`          | Lint SCSS files                          |
| `npm run lint:scss:fix`      | Auto-fix lint errors in SCSS             |
| `npm run test:unit`          | Run Jest unit tests                      |
| `npm run test:ui`            | Run Loki screenshot tests                |
| `npm run test:ui:ok`         | Confirm new screenshots for UI tests     |
| `npm run test:ui:ci`         | Run UI tests in CI                       |
| `npm run visual:report`      | Generate full screenshot-test report     |
| `npm run visual:report:json` | Generate JSON screenshot-test report     |
| `npm run visual:report:html` | Generate HTML screenshot-test report     |
| `npm run storybook`          | Start Storybook                          |
| `npm run storybook:build`    | Build Storybook                          |
| `npm run prepare`            | Install pre-commit hooks (Husky)         |
| `npm run generate:slice`     | Generate a new FSD slice (feature slice) |

---

## Project Architecture

This application is structured according to the Feature-Sliced Design methodology.
Refer to the official guide: [https://feature-sliced.design/docs/get-started/tutorial](https://feature-sliced.design/docs/get-started/tutorial)

Key layers:

* **app**: Global application setup and providers
* **pages**: Route-based composition
* **widgets**: Reusable UI blocks combining features and entities
* **features**: Business logic and feature-specific UI
* **entities**: Domain objects and state holders
* **shared**: Utilities, components, and UI-kit

---

## Internationalization

We use **i18next** for translations.
Translation files live in `public/locales`.

> **Tip:** Install the VSCode/WebStorm i18next plugin for editing support.

Official docs: [https://react.i18next.com](https://react.i18next.com)

---

## Testing

We maintain four types of tests:

1. **Unit tests** (Jest)

   ```bash
   npm run test:unit
   ```
2. **Component tests** (React Testing Library)

   ```bash
   npm run test:unit
   ```
3. **Screenshot tests** (Loki)

   ```bash
   npm run test:ui
   ```
4. **End-to-end tests** (Cypress)

   ```bash
   npm run test:e2e
   ```

More details: [Testing guide](/docs/tests.md)

---

## Linting

* **ESLint** for TypeScript
* **Stylelint** for SCSS
* [Custom ESLint plugin](https://github.com/RudenkoOleksandr02/eslint-plugin-fsd-paths) `@sashar/eslint-plugin-fsd-paths` enforces FSD rules:

   1. **path-checker:** Disallow absolute imports within the same slice
   2. **layer-imports:** Enforce correct layer dependencies (e.g., widgets ↔ features ↔ entities)
   3. **public-api-imports:** Restrict cross-slice imports to public APIs (auto-fixable)

Commands:

```bash
npm run lint:ts
npm run lint:ts:fix
npm run lint:scss
npm run lint:scss:fix
```

---

## Storybook

We document each UI component with stories and mock server interactions via `storybook-addon-mock`.
Story files live alongside components with the extension `.stories.tsx`.

To start Storybook:

```bash
npm run storybook
```

More: [Storybook docs](/docs/storybook.md)

**Example**:

```tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Text' };

export const Clear = Template.bind({});
Clear.args = { children: 'Text', theme: ButtonTheme.CLEAR };
```

---

## Configuration Files

All configuration is centralized in `/config`:

* `config/babel` — Babel settings
* `config/build` — Webpack configuration
* `config/jest` — Jest environment
* `config/storybook` — Storybook setup

Vite config lives at `vite.config.ts`.

Custom helper scripts are in `scripts/` for code generation, reporting, refactoring, etc.

---

## CI Pipeline & Pre-commit Hooks

* **GitHub Actions** workflows in `/.github/workflows` run:

   * All tests (unit, UI, e2e)
   * Build (app & Storybook)
   * Lint checks
* **Husky** pre-commit hooks ensure linting before commits (configured via `prepare` script)

---

## Data Handling

* **Redux Toolkit** for state management with optional `EntityAdapter` normalization.
* **RTK Query** for server communication ([rtkApi.ts](/src/shared/api/rtkApi.ts)).
* **DynamicModuleLoader** for on-demand reducer injection (`/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx`).

---

## Working with feature-flags

Feature flags are only allowed to be used with the toggleFeatures helper an object with options is passed to it.

{
    name: feature flag name,
    on: function that will work after the feature is enabled
    of: function that will work after the feature is turned off
}

To automatically remove a feature, use the Remove-feature.ts script, which takes 2 arguments
1. Name of the removed feature flag
2. State (on\off)

---

## Entities & Features

### Entities

* [Article](/src/entities/Article)
* [Comment](/src/entities/Comment)
* [Counter](/src/entities/Counter)
* [Country](/src/entities/Country)
* [Currency](/src/entities/Currency)
* [Notification](/src/entities/Notification)
* [Profile](/src/entities/Profile)
* [Rating](/src/entities/Rating)
* [User](/src/entities/User)

### Features

* [AddCommentForm](/src/features/AddCommentForm)
* [articleRating](/src/features/articleRating)
* [articleRecommendationsList](/src/features/articleRecommendationsList)
* [ArticleViewSelector](/src/features/ArticleViewSelector)
* [AuthByUserName](/src/features/AuthByUserName)
* [avatarDropdown](/src/features/avatarDropdown)
* [editableProfileCard](/src/features/editableProfileCard)
* [LangSwitcher](/src/features/LangSwitcher)
* [notificationButton](/src/features/notificationButton)
* [profileRating](/src/features/profileRating)
* [ThemeSwitcher](/src/features/ThemeSwitcher)

