//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemBirthdayMergeOp } from "./SegmentTypeItemBirthdayMergeOp.js";

export const SegmentTypeItemBirthdayMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemBirthdayMerge.Raw,
    Mailchimp.SegmentTypeItemBirthdayMerge
> = core.serialization.object({
    field: core.serialization.string(),
    op: SegmentTypeItemBirthdayMergeOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemBirthdayMerge {
    export interface Raw {
        field: string;
        op: SegmentTypeItemBirthdayMergeOp.Raw;
        value?: string | null;
    }
}
