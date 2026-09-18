//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemZipMergeOp } from "./SegmentTypeItemZipMergeOp.js";

export const SegmentTypeItemZipMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemZipMerge.Raw,
    Mailchimp.SegmentTypeItemZipMerge
> = core.serialization.object({
    extra: core.serialization.string(),
    field: core.serialization.string(),
    op: SegmentTypeItemZipMergeOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemZipMerge {
    export interface Raw {
        extra: string;
        field: string;
        op: SegmentTypeItemZipMergeOp.Raw;
        value: string;
    }
}
