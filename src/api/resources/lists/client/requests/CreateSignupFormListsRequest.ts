//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id"
 *     }
 */
export interface CreateSignupFormListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The signup form body content. */
    contents?: Mailchimp.CreateSignupFormListsRequestContentsItem[];
    /** Options for customizing your signup form header. */
    header?: Mailchimp.CreateSignupFormListsRequestHeader;
    /** An array of objects, each representing an element style for the signup form. */
    styles?: Mailchimp.CreateSignupFormListsRequestStylesItem[];
}
