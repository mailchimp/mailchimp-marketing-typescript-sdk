//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

export interface BatchSubscribeOrUnsubscribeListsResponseErrorsItem {
    /** The email address that could not be added or updated. */
    emailAddress?: string;
    /** The error message indicating why the email address could not be added or updated. */
    error?: string;
    /** A unique code that identifies this specifc error. */
    errorCode?: Mailchimp.BatchSubscribeOrUnsubscribeListsResponseErrorsItemErrorCode;
    /** If the error is field-related, information about which field is at issue. */
    field?: string;
    /** Message indicating how to resolve a field-related error. */
    fieldMessage?: string;
}
