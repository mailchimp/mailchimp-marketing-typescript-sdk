//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkFollowValue: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkFollowValue.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkFollowValue
> = core.serialization.enum_(["twitter_follow"]);

export declare namespace SegmentTypeItemSocialNetworkFollowValue {
    export type Raw = "twitter_follow";
}
