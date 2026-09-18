//  This file was auto-generated from our API Definition.

/**
 * The settings for the Automation workflow.
 */
export interface AutomationWorkflowSettings {
    /** Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`. */
    authenticate?: boolean;
    /** Whether to automatically append Mailchimp's [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation. */
    autoFooter?: boolean;
    /** The 'from' name for the Automation (not an email address). */
    fromName?: string;
    /** Whether to automatically inline the CSS included with the Automation content. */
    inlineCss?: boolean;
    /** The reply-to email address for the Automation. */
    replyTo?: string;
    /** The title of the Automation. */
    title?: string;
    /** The Automation's custom 'To' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/). */
    toName?: string;
    /** Whether to use Mailchimp Conversation feature to manage replies */
    useConversation?: boolean;
}
