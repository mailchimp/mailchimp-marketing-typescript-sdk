//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * List settings for the Automation.
 */
export interface AutomationWorkflowRecipients {
    /** The unique list id. */
    listId?: string;
    /** The status of the list used, namely if it's deleted or disabled. */
    listIsActive?: boolean;
    /** List Name. */
    listName?: string;
    segmentOpts?: Mailchimp.SegmentType;
    /** The id of the store. */
    storeId?: string;
}
