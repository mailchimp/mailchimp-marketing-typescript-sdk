//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A specific note for a specific member.
 */
export interface MemberNotes {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.MemberNotesLinksItem[];
    /** As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address. */
    contactId?: string;
    /** The date and time the note was created in ISO 8601 format. */
    createdAt?: Date;
    /** The author of the note. */
    createdBy?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    emailId?: string;
    /** The note id. */
    id?: number;
    /** The unique id for the list. */
    listId?: string;
    /** The content of the note. */
    note?: string;
    /** The date and time the note was last updated in ISO 8601 format. */
    updatedAt?: Date;
}
