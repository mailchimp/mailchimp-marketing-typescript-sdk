//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSocialInfluenceField } from "./SegmentTypeItemSocialInfluenceField.js";
import { SegmentTypeItemSocialInfluenceOp } from "./SegmentTypeItemSocialInfluenceOp.js";

export const SegmentTypeItemSocialInfluence: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSocialInfluence.Raw,
    Mailchimp.SegmentTypeItemSocialInfluence
> = core.serialization.object({
    field: SegmentTypeItemSocialInfluenceField,
    op: SegmentTypeItemSocialInfluenceOp,
    value: core.serialization.number(),
});

export declare namespace SegmentTypeItemSocialInfluence {
    export interface Raw {
        field: SegmentTypeItemSocialInfluenceField.Raw;
        op: SegmentTypeItemSocialInfluenceOp.Raw;
        value: number;
    }
}
