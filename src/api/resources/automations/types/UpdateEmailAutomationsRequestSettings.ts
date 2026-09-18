//  This file was auto-generated from our API Definition.

/**
 * Settings for the campaign including the email subject, from name, and from email address.
 */
export interface UpdateEmailAutomationsRequestSettings {
    /** The 'from' name for the Automation (not an email address). */
    fromName?: string;
    /** The preview text for the campaign. */
    previewText?: string;
    /** The reply-to email address for the Automation. */
    replyTo?: string;
    /** The subject line for the campaign. */
    subjectLine?: string;
    /** The title of the Automation. */
    title?: string;
}
