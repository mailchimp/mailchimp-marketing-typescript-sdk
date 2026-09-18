//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual Automation workflow email.
 */
export interface AutomationWorkflowEmail {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.AutomationWorkflowEmailLinksItem[];
    /** The link to the campaign's archive version in ISO 8601 format. */
    archiveUrl?: string;
    /** How the campaign's content is put together ('template', 'drag_and_drop', 'html', 'url'). */
    contentType?: string;
    /** The date and time the campaign was created in ISO 8601 format. */
    createTime?: Date;
    /** The delay settings for an Automation email. */
    delay?: Mailchimp.AutomationWorkflowEmailDelay;
    /** The total number of emails sent for this campaign. */
    emailsSent?: number;
    /** Determines if the campaign contains the *|BRAND:LOGO|* merge tag. */
    hasLogoMergeTag?: boolean;
    /** A string that uniquely identifies the Automation email. */
    id?: string;
    /** Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor. */
    needsBlockRefresh?: boolean;
    /** The position of an Automation email in a workflow. */
    position?: number;
    /** List settings for the campaign. */
    recipients?: Mailchimp.AutomationWorkflowEmailRecipients;
    /** For sent campaigns, a summary of opens and clicks. */
    reportSummary?: Mailchimp.AutomationWorkflowEmailReportSummary;
    /**  The date and time a campaign was sent in ISO 8601 format */
    sendTime?: Date;
    /** Settings for the campaign including the email subject, from name, and from email address. */
    settings?: Mailchimp.AutomationWorkflowEmailSettings;
    /** The preview for the campaign, rendered by social networks like Facebook and Twitter. [Learn more](https://mailchimp.com/help/enable-and-customize-social-cards/). */
    socialCard?: Mailchimp.AutomationWorkflowEmailSocialCard;
    /** The date and time the campaign was started in ISO 8601 format. */
    startTime?: Date;
    /** The current status of the campaign. */
    status?: Mailchimp.AutomationWorkflowEmailStatus;
    /** The tracking options for a campaign. */
    tracking?: Mailchimp.AutomationWorkflowEmailTracking;
    /** Available triggers for Automation workflows. */
    triggerSettings?: Mailchimp.AutomationWorkflowEmailTriggerSettings;
    /** The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`. */
    webId?: number;
    /** A string that uniquely identifies an Automation workflow. */
    workflowId?: string;
}
