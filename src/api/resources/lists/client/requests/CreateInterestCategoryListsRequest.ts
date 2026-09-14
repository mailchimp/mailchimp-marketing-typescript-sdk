//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         title: "title",
 *         type: "checkboxes"
 *     }
 */
export interface CreateInterestCategoryListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The order that the categories are displayed in the list. Lower numbers display first. */
    display_order?: number;
    /** The text description of this category. This field appears on signup forms and is often phrased as a question. */
    title: string;
    /** Determines how this category’s interests appear on signup forms. */
    type: CreateInterestCategoryListsRequest.Type;
}

export namespace CreateInterestCategoryListsRequest {
    /** Determines how this category’s interests appear on signup forms. */
    export const Type = {
        Checkboxes: "checkboxes",
        Dropdown: "dropdown",
        Radio: "radio",
        Hidden: "hidden",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
