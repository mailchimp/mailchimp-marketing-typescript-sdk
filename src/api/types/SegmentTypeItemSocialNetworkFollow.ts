//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by social network in Social Profiles data.
 */
export interface SegmentTypeItemSocialNetworkFollow {
    /** Segment by social network in Social Profiles data. */
    field: Mailchimp.SegmentTypeItemSocialNetworkFollowField;
    /** Members who are/not following a linked account on a given social network. */
    op: Mailchimp.SegmentTypeItemSocialNetworkFollowOp;
    /** The social network to segment against. */
    value: Mailchimp.SegmentTypeItemSocialNetworkFollowValue;
}
