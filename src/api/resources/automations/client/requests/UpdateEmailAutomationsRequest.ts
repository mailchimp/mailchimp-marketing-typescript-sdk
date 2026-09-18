//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         workflowId: "workflow_id",
 *         workflowEmailId: "workflow_email_id"
 *     }
 */
export interface UpdateEmailAutomationsRequest {
    /** The unique id for the Automation workflow. */
    workflowId: string;
    /** The unique id for the Automation workflow email. */
    workflowEmailId: string;
    /** The delay settings for an automation email. */
    delay?: Mailchimp.UpdateEmailAutomationsRequestDelay;
    /** Settings for the campaign including the email subject, from name, and from email address. */
    settings?: Mailchimp.UpdateEmailAutomationsRequestSettings;
}
