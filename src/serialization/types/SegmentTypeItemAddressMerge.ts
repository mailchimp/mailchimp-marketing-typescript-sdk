//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemAddressMergeOp } from "./SegmentTypeItemAddressMergeOp.js";

export const SegmentTypeItemAddressMerge: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemAddressMerge.Raw,
    Mailchimp.SegmentTypeItemAddressMerge
> = core.serialization.object({
    field: core.serialization.string(),
    op: SegmentTypeItemAddressMergeOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemAddressMerge {
    export interface Raw {
        field: string;
        op: SegmentTypeItemAddressMergeOp.Raw;
        value?: string | null;
    }
}
