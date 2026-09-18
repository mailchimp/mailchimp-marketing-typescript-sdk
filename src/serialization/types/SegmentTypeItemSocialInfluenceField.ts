//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialInfluenceField: core.serialization.Schema<
    serializers.SegmentTypeItemSocialInfluenceField.Raw,
    Mailchimp.SegmentTypeItemSocialInfluenceField
> = core.serialization.enum_(["social_influence"]);

export declare namespace SegmentTypeItemSocialInfluenceField {
    export type Raw = "social_influence";
}
