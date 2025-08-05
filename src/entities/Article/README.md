## Article Entity

The "Article" entity encapsulates all logic related to loading, storing, and displaying article data.

### Public API

* **Components**
  * `ArticleDetails` — component for displaying detailed information about an article (title, author, date, content).
  * `ArticleList` — component for rendering a list of article previews with titles and short descriptions.
  * `ArticleSortSelector` — dropdown selector for choosing how to sort the list of articles (by date, views, etc.).
  * `ArticleTypeTabs` — tab navigation for filtering articles by type (IT, Science, Politics, etc.).

* **Types & Enums**
  * `Article` — interface describing article fields: `id`, `title`, `subtitle`, `img`, `views`, `createdAt`, `type`, `blocks`, etc.
  * `ArticleType` — enum of available article categories (e.g., `IT`, `ECONOMICS`, `SCIENCE`, etc.).
  * `ArticleBlockType` — enum for content block types within an article (text, image, code, etc.).
  * `ArticleSortField` — enum for fields used in article sorting (`VIEWS`, `CREATED_AT`, etc.).
  * `ArticleDetailsSchema` — schema for validating/normalizing article data on load (based on Zod/Yup).
  * `ArticleView` — type representing article view modes (`LIST` or `GRID`).

* **Selectors**
  * `getArticleDetailsData` — selector for retrieving detailed information about a selected article from the store (e.g., Redux).
