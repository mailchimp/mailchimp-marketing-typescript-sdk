//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Information about the contact.
 */
export interface GetSurveyResponsReportingResponseContact {
    /** URL for the contact's avatar or profile image. */
    avatarUrl?: string;
    /** Indicates whether a contact consents to 1:1 messaging. */
    consentsToOneToOneMessaging?: boolean;
    /** The ID of this contact. */
    contactId?: string;
    /** The contact's email address. */
    email?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The contact's full name. */
    fullName?: string;
    /** The contact's sms phone number. */
    phone?: string;
    /** The contact's current status. */
    status?: Mailchimp.GetSurveyResponsReportingResponseContactStatus;
}
