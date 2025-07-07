// <path page, scroll position>
export type ScrollSchema = Record<string, number>;

export interface RouteScrollSchema {
    scrollMap: ScrollSchema;
}
