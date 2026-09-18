//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemVipField } from "./SegmentTypeItemVipField.js";
import { SegmentTypeItemVipOp } from "./SegmentTypeItemVipOp.js";

export const SegmentTypeItemVip: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemVip.Raw,
    Mailchimp.SegmentTypeItemVip
> = core.serialization.object({
    field: SegmentTypeItemVipField,
    op: SegmentTypeItemVipOp,
});

export declare namespace SegmentTypeItemVip {
    export interface Raw {
        field: SegmentTypeItemVipField.Raw;
        op: SegmentTypeItemVipOp.Raw;
    }
}
