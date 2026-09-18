//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         pageId: "page_id"
 *     }
 */
export interface UpdateLandingPagesRequest {
    /** The unique id for the page. */
    pageId: string;
    /** The description of this landing page. */
    description?: string;
    /** The list's ID associated with this landing page. */
    listId?: string;
    /** The name of this landing page. */
    name?: string;
    /** The ID of the store associated with this landing page. */
    storeId?: string;
    /** The title of this landing page seen in the browser's title bar. */
    title?: string;
    /** The tracking settings applied to this landing page. */
    tracking?: Mailchimp.UpdateLandingPagesRequestTracking;
}
