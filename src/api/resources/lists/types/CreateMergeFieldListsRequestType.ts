//  This file was auto-generated from our API Definition.

/** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
export const CreateMergeFieldListsRequestType = {
    Text: "text",
    Number: "number",
    Address: "address",
    Phone: "phone",
    Date: "date",
    Url: "url",
    Imageurl: "imageurl",
    Radio: "radio",
    Dropdown: "dropdown",
    Birthday: "birthday",
    Zip: "zip",
} as const;
export type CreateMergeFieldListsRequestType =
    (typeof CreateMergeFieldListsRequestType)[keyof typeof CreateMergeFieldListsRequestType];
