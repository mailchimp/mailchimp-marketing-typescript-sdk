//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSocialNetworkFollowField } from "./SegmentTypeItemSocialNetworkFollowField.js";
import { SegmentTypeItemSocialNetworkFollowOp } from "./SegmentTypeItemSocialNetworkFollowOp.js";
import { SegmentTypeItemSocialNetworkFollowValue } from "./SegmentTypeItemSocialNetworkFollowValue.js";

export const SegmentTypeItemSocialNetworkFollow: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSocialNetworkFollow.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkFollow
> = core.serialization.object({
    field: SegmentTypeItemSocialNetworkFollowField,
    op: SegmentTypeItemSocialNetworkFollowOp,
    value: SegmentTypeItemSocialNetworkFollowValue,
});

export declare namespace SegmentTypeItemSocialNetworkFollow {
    export interface Raw {
        field: SegmentTypeItemSocialNetworkFollowField.Raw;
        op: SegmentTypeItemSocialNetworkFollowOp.Raw;
        value: SegmentTypeItemSocialNetworkFollowValue.Raw;
    }
}
