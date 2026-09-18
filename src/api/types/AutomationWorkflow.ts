//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual Automation workflow's settings and content.
 */
export interface AutomationWorkflow {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.AutomationWorkflowLinksItem[];
    /** The date and time the Automation was created in ISO 8601 format. */
    createTime?: Date;
    /** The total number of emails sent for the Automation. */
    emailsSent?: number;
    /** A string that identifies the Automation. */
    id?: string;
    /** List settings for the Automation. */
    recipients?: Mailchimp.AutomationWorkflowRecipients;
    /** A summary of opens and clicks for sent campaigns. */
    reportSummary?: Mailchimp.AutomationWorkflowReportSummary;
    /** The settings for the Automation workflow. */
    settings?: Mailchimp.AutomationWorkflowSettings;
    /** The date and time the Automation was started in ISO 8601 format. */
    startTime?: Date;
    /** The current status of the Automation. */
    status?: Mailchimp.AutomationWorkflowStatus;
    /** The tracking options for the Automation. */
    tracking?: Mailchimp.AutomationWorkflowTracking;
    /** Available triggers for Automation workflows. */
    triggerSettings?: Mailchimp.AutomationWorkflowTriggerSettings;
}
