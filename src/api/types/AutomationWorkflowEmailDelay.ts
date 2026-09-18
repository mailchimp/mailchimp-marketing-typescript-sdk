//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The delay settings for an Automation email.
 */
export interface AutomationWorkflowEmailDelay {
    /** The action that triggers the delay of an Automation email. */
    action?: Mailchimp.AutomationWorkflowEmailDelayAction;
    /** The user-friendly description of the action that triggers an Automation email. */
    actionDescription?: string;
    /** The delay amount for an Automation email. */
    amount?: number;
    /** Whether the delay settings describe before or after the delay action of an Automation email. */
    direction?: Mailchimp.AutomationWorkflowEmailDelayDirection;
    /** The user-friendly description of the delay and trigger action settings for an Automation email. */
    fullDescription?: string;
    /** The type of delay for an Automation email. */
    type?: Mailchimp.AutomationWorkflowEmailDelayType;
}
