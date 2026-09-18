//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSelectMergeOp } from "./SegmentTypeItemSelectMergeOp.js";

export const SegmentTypeItemSelectMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSelectMerge.Raw,
    Mailchimp.SegmentTypeItemSelectMerge
> = core.serialization.object({
    field: core.serialization.string(),
    op: SegmentTypeItemSelectMergeOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemSelectMerge {
    export interface Raw {
        field: string;
        op: SegmentTypeItemSelectMergeOp.Raw;
        value?: string | null;
    }
}
