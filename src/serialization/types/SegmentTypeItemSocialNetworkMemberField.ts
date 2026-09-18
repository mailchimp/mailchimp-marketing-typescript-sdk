//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkMemberField: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkMemberField.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkMemberField
> = core.serialization.enum_(["social_network"]);

export declare namespace SegmentTypeItemSocialNetworkMemberField {
    export type Raw = "social_network";
}
