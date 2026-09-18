//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by use of a particular email client.
 */
export interface SegmentTypeItemEmailClient {
    /** Segment by use of a particular email client. */
    field: Mailchimp.SegmentTypeItemEmailClientField;
    /** The operation to determine whether we select clients that match the value, or clients that do not match the value. */
    op: Mailchimp.SegmentTypeItemEmailClientOp;
    /** The name of the email client. */
    value: string;
}
