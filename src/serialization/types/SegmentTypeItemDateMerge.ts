//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemDateMergeOp } from "./SegmentTypeItemDateMergeOp.js";

export const SegmentTypeItemDateMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemDateMerge.Raw,
    Mailchimp.SegmentTypeItemDateMerge
> = core.serialization.object({
    field: core.serialization.string(),
    op: SegmentTypeItemDateMergeOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemDateMerge {
    export interface Raw {
        field: string;
        op: SegmentTypeItemDateMergeOp.Raw;
        value?: string | null;
    }
}
