//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An authorized app.
 */
export interface GetAuthorizedAppsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GetAuthorizedAppsResponseLinksItem[];
    /** A short description of the application. */
    description?: string;
    /** The ID for the application. */
    id?: number;
    /** The name of the application. */
    name?: string;
    /** An array of usernames for users who have linked the app. */
    users?: string[];
}
