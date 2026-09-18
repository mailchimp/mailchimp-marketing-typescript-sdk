//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of the subscribers who were removed from an Automation workflow.
 */
export interface ListRemovedSubscribersAutomationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListRemovedSubscribersAutomationsResponseLinksItemItem[][];
    /** An array of objects, each representing a subscriber who was removed from an Automation workflow. */
    subscribers?: Mailchimp.SubscriberRemovedFromAutomationWorkflow[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** A string that uniquely identifies an Automation workflow. */
    workflowId?: string;
}
