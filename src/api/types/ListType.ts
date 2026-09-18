//  This file was auto-generated from our API Definition.

/** The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). */
export const ListType = {
    Saved: "saved",
    Static: "static",
    Fuzzy: "fuzzy",
} as const;
export type ListType = (typeof ListType)[keyof typeof ListType];
