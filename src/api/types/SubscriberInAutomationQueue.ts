//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about subscribers in an Automation email queue.
 */
export interface SubscriberInAutomationQueue {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SubscriberInAutomationQueueLinksItemItem[][];
    /** The list member's email address. */
    emailAddress?: string;
    /** A string that uniquely identifies an email in an Automation workflow. */
    emailId?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    id?: string;
    /** A string that uniquely identifies a list. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** The date and time of the next send for the workflow email in ISO 8601 format. */
    nextSend?: Date;
    /** A string that uniquely identifies an Automation workflow. */
    workflowId?: string;
}
