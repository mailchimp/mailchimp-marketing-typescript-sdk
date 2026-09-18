//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A workflow's runtime settings for an Automation.
 */
export interface AutomationWorkflowEmailTriggerSettingsRuntime {
    /** The days an Automation workflow can send. */
    days?: Mailchimp.AutomationWorkflowEmailTriggerSettingsRuntimeDaysItem[];
    /** The hours an Automation workflow can send. */
    hours?: Mailchimp.AutomationWorkflowEmailTriggerSettingsRuntimeHours;
}
