//  This file was auto-generated from our API Definition.

/** The status for the tag on the member, pass in active to add a tag or inactive to remove it. */
export const CreateMemberTagListsRequestTagsItemStatus = {
    Inactive: "inactive",
    Active: "active",
} as const;
export type CreateMemberTagListsRequestTagsItemStatus =
    (typeof CreateMemberTagListsRequestTagsItemStatus)[keyof typeof CreateMemberTagListsRequestTagsItemStatus];
