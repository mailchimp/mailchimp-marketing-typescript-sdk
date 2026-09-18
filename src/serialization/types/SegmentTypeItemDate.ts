//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemDateField } from "./SegmentTypeItemDateField.js";
import { SegmentTypeItemDateOp } from "./SegmentTypeItemDateOp.js";

export const SegmentTypeItemDate: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemDate.Raw,
    Mailchimp.SegmentTypeItemDate
> = core.serialization.object({
    extra: core.serialization.string().optional(),
    field: SegmentTypeItemDateField,
    op: SegmentTypeItemDateOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemDate {
    export interface Raw {
        extra?: string | null;
        field: SegmentTypeItemDateField.Raw;
        op: SegmentTypeItemDateOp.Raw;
        value: string;
    }
}
