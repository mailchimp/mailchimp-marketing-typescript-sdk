//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of the emails in an Automation workflow.
 */
export interface ListEmailsAutomationsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListEmailsAutomationsResponseLinksItemItem[][];
    /** An array of objects, each representing an email in an Automation workflow. */
    emails?: Mailchimp.AutomationWorkflowEmail[];
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
