//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * An instance of a contact.
 */
export interface AudiencesContact {
    /** The unique ID for the audience. */
    audienceId?: string;
    /** The date that the contact was created. */
    createdAt?: Date;
    emailChannel?: Mailchimp.AudiencesContactEmailChannel;
    /** The unique ID for the contact. */
    id?: string;
    /** The contact's detected language. Empty string when no language has been detected or set. */
    language?: Mailchimp.AudiencesContactLanguage;
    /** The date that the contact was last updated. */
    lastUpdatedAt?: Date;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.AudiencesContactMergeFieldsValue>;
    smsChannel?: Mailchimp.AudiencesContactSmsChannel;
    /** The source from which the parent's entity was created. */
    source?: Mailchimp.AudiencesContactSource;
    /** The status of a contact. */
    status?: Mailchimp.AudiencesContactStatus;
    /** The tags assigned to this contact. */
    tags?: string[];
}
