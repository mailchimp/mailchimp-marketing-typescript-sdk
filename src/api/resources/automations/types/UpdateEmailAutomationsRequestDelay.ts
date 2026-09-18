//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * The delay settings for an automation email.
 */
export interface UpdateEmailAutomationsRequestDelay {
    /** The action that triggers the delay of an automation emails. */
    action: Mailchimp.UpdateEmailAutomationsRequestDelayAction;
    /** The delay amount for an automation email. */
    amount?: number;
    /** Whether the delay settings describe before or after the delay action of an automation email. */
    direction?: Mailchimp.UpdateEmailAutomationsRequestDelayDirection;
    /** The type of delay for an automation email. */
    type?: Mailchimp.UpdateEmailAutomationsRequestDelayType;
}
