//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Segment by social network in Social Profiles data.
 */
export interface SegmentTypeItemSocialNetworkMember {
    /** Segment by social network in Social Profiles data. */
    field: Mailchimp.SegmentTypeItemSocialNetworkMemberField;
    /** Members who are/not on a given social network. */
    op: Mailchimp.SegmentTypeItemSocialNetworkMemberOp;
    /** The social network to segment against. */
    value: Mailchimp.SegmentTypeItemSocialNetworkMemberValue;
}
