//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An automation workflow
 */
export interface ListEmailQueueAutomationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListEmailQueueAutomationsResponseLinksItemItem[][];
    /** A string that uniquely identifies an email in an Automation workflow. */
    emailId?: string;
    /** An array of objects, each representing a subscriber queue for an email in an Automation workflow. */
    queue?: Mailchimp.ListEmailQueueAutomationsResponseQueueItem[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
    /** A string that uniquely identifies an Automation workflow. */
    workflowId?: string;
}
