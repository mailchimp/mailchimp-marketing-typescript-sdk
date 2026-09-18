//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkFollowField: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkFollowField.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkFollowField
> = core.serialization.enum_(["social_network"]);

export declare namespace SegmentTypeItemSocialNetworkFollowField {
    export type Raw = "social_network";
}
