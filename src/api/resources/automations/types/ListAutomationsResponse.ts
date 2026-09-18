//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of objects, each representing an Automation workflow.
 */
export interface ListAutomationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListAutomationsResponseLinksItem[];
    /** An array of objects, each representing an Automation workflow. */
    automations?: Mailchimp.AutomationWorkflow[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
