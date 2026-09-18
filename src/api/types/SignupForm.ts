//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * List signup form.
 */
export interface SignupForm {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SignupFormLinksItem[];
    /** The signup form body content. */
    contents?: Mailchimp.SignupFormContentsItem[];
    /** Options for customizing your signup form header. */
    header?: Mailchimp.SignupFormHeader;
    /** The signup form's list id. */
    listId?: string;
    /** Signup form URL. */
    signupFormUrl?: string;
    /** An array of objects, each representing an element style for the signup form. */
    styles?: Mailchimp.SignupFormStylesItem[];
}
