//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface CreateLandingPagesRequest {
    /** Will create the Landing Page using the account's Default List instead of requiring a list_id. */
    useDefaultList?: boolean;
    /** The description of this landing page. */
    description?: string;
    /** The list's ID associated with this landing page. */
    listId?: string;
    /** The name of this landing page. */
    name?: string;
    /** The ID of the store associated with this landing page. */
    storeId?: string;
    /** The template_id of this landing page. */
    templateId?: number;
    /** The title of this landing page seen in the browser's title bar. */
    title?: string;
    /** The tracking settings applied to this landing page. */
    tracking?: Mailchimp.CreateLandingPagesRequestTracking;
    /** The type of template the landing page has. */
    type?: Mailchimp.CreateLandingPagesRequestType;
}
