//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEcommNumberField } from "./SegmentTypeItemEcommNumberField.js";
import { SegmentTypeItemEcommNumberOp } from "./SegmentTypeItemEcommNumberOp.js";
import { SegmentTypeItemEcommNumberValue } from "./SegmentTypeItemEcommNumberValue.js";

export const SegmentTypeItemEcommNumber: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEcommNumber.Raw,
    Mailchimp.SegmentTypeItemEcommNumber
> = core.serialization.object({
    field: SegmentTypeItemEcommNumberField,
    op: SegmentTypeItemEcommNumberOp,
    value: SegmentTypeItemEcommNumberValue,
});

export declare namespace SegmentTypeItemEcommNumber {
    export interface Raw {
        field: SegmentTypeItemEcommNumberField.Raw;
        op: SegmentTypeItemEcommNumberOp.Raw;
        value: SegmentTypeItemEcommNumberValue.Raw;
    }
}
