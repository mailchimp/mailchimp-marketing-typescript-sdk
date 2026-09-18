//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by interaction with a campaign via Conversations.
 */
export interface SegmentTypeItemConversation {
    /** Segment by interaction with a campaign via Conversations. */
    field: Mailchimp.SegmentTypeItemConversationField;
    /** The status of a member's interaction with a conversation. One of the following: has replied or has not replied. */
    op: Mailchimp.SegmentTypeItemConversationOp;
    /** The web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns. */
    value: string;
}
