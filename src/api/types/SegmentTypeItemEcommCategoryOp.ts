//  This file was auto-generated from our API Definition.

/** A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string. */
export const SegmentTypeItemEcommCategoryOp = {
    Is: "is",
    Not: "not",
    Contains: "contains",
    Notcontain: "notcontain",
    Starts: "starts",
    Ends: "ends",
} as const;
export type SegmentTypeItemEcommCategoryOp =
    (typeof SegmentTypeItemEcommCategoryOp)[keyof typeof SegmentTypeItemEcommCategoryOp];
