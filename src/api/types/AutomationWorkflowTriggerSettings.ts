//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Available triggers for Automation workflows.
 */
export interface AutomationWorkflowTriggerSettings {
    /** A workflow's runtime settings for an Automation. */
    runtime?: Mailchimp.AutomationWorkflowTriggerSettingsRuntime;
    /** The number of emails in the Automation workflow. */
    workflowEmailsCount?: number;
    /** The title of the workflow type. */
    workflowTitle?: string;
    /** The type of Automation workflow. */
    workflowType: Mailchimp.AutomationWorkflowTriggerSettingsWorkflowType;
}
