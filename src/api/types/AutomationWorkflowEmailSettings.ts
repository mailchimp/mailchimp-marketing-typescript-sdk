//  This file was auto-generated from our API Definition.

/**
 * Settings for the campaign including the email subject, from name, and from email address.
 */
export interface AutomationWorkflowEmailSettings {
    /** Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`. */
    authenticate?: boolean;
    /** An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to. */
    autoFbPost?: string[];
    /** Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign. */
    autoFooter?: boolean;
    /** Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent. */
    autoTweet?: boolean;
    /** Whether the campaign uses the drag-and-drop editor. */
    dragAndDrop?: boolean;
    /** Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`. */
    fbComments?: boolean;
    /** The 'from' name on the campaign (not an email address). */
    fromName?: string;
    /** Automatically inline the CSS included with the campaign content. */
    inlineCss?: boolean;
    /** The preview text for the campaign. */
    previewText?: string;
    /** The reply-to email address for the campaign. */
    replyTo?: string;
    /** The subject line for the campaign. */
    subjectLine?: string;
    /** The id for the template used in this campaign. */
    templateId?: number;
    /** The title of the campaign. */
    title?: string;
}
