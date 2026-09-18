//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific segment.
 */
export interface List {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListLinksItem[];
    /** The date and time the segment was created in ISO 8601 format. */
    createdAt?: Date;
    /** The unique id for the segment. */
    id?: number;
    /** The list id. */
    listId?: string;
    /** The number of active subscribers currently included in the segment. */
    memberCount?: number;
    /** The name of the segment. */
    name?: string;
    /** The conditions of the segment. Static segments (tags) and fuzzy segments don't have conditions. */
    options?: Mailchimp.ListOptions;
    /** The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs). */
    type?: Mailchimp.ListType;
    /** The date and time the segment was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
