//  This file was auto-generated from our API Definition.

/** Determines how this category’s interests appear on signup forms. */
export const InterestCategoryType = {
    Checkboxes: "checkboxes",
    Dropdown: "dropdown",
    Radio: "radio",
    Hidden: "hidden",
} as const;
export type InterestCategoryType = (typeof InterestCategoryType)[keyof typeof InterestCategoryType];
