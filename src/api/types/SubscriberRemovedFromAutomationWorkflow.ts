//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of a subscriber removed from an Automation workflow.
 */
export interface SubscriberRemovedFromAutomationWorkflow {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SubscriberRemovedFromAutomationWorkflowLinksItemItem[][];
    /** The list member's email address. */
    emailAddress?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    id?: string;
    /** A string that uniquely identifies a list. */
    listId?: string;
    /** A string that uniquely identifies an Automation workflow. */
    workflowId?: string;
}
