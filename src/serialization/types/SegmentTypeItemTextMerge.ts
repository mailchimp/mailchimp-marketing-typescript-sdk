//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemTextMergeOp } from "./SegmentTypeItemTextMergeOp.js";

export const SegmentTypeItemTextMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemTextMerge.Raw,
    Mailchimp.SegmentTypeItemTextMerge
> = core.serialization.object({
    field: core.serialization.string(),
    op: SegmentTypeItemTextMergeOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemTextMerge {
    export interface Raw {
        field: string;
        op: SegmentTypeItemTextMergeOp.Raw;
        value?: string | null;
    }
}
