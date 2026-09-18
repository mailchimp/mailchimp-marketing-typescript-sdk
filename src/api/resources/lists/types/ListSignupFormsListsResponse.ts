//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * List Signup Forms.
 */
export interface ListSignupFormsListsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListSignupFormsListsResponseLinksItem[];
    /** The list id. */
    listId?: string;
    /** List signup form. */
    signupForms?: Mailchimp.SignupForm[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
