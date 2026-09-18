//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by interaction with a specific campaign.
 */
export interface SegmentTypeItemAim {
    /** Segment by interaction with a specific campaign. */
    field?: Mailchimp.SegmentTypeItemAimField;
    /** The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent. */
    op?: Mailchimp.SegmentTypeItemAimOp;
    /** Either the web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns. */
    value?: string;
}
