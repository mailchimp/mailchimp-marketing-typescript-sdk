//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         recipients: {},
 *         triggerSettings: {
 *             workflowType: "abandonedBrowse"
 *         }
 *     }
 */
export interface CreateAutomationsRequest {
    /** List settings for the Automation. */
    recipients: Mailchimp.CreateAutomationsRequestRecipients;
    /** The settings for the Automation workflow. */
    settings?: Mailchimp.CreateAutomationsRequestSettings;
    /** Trigger settings for the Automation. */
    triggerSettings: Mailchimp.CreateAutomationsRequestTriggerSettings;
}
