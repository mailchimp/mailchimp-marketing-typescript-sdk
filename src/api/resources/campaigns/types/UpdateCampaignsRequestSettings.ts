//  This file was auto-generated from our API Definition.

/**
 * The settings for your campaign, including subject, from name, reply-to address, and more.
 */
export interface UpdateCampaignsRequestSettings {
    /** Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`. */
    authenticate?: boolean;
    /** An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to. */
    autoFbPost?: string[];
    /** Automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign. */
    autoFooter?: boolean;
    /** Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent. */
    autoTweet?: boolean;
    /** Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`. */
    fbComments?: boolean;
    /** If the campaign is listed in a folder, the id for that folder. */
    folderId?: string;
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
    /** The id of the template to use. */
    templateId?: number;
    /** The title of the campaign. */
    title?: string;
    /** The campaign's custom 'To' name. Typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/). */
    toName?: string;
    /** Use Mailchimp Conversation feature to manage out-of-office replies. */
    useConversation?: boolean;
}
