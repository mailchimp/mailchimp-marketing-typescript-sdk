//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemStaticSegmentField } from "./SegmentTypeItemStaticSegmentField.js";
import { SegmentTypeItemStaticSegmentOp } from "./SegmentTypeItemStaticSegmentOp.js";
import { SegmentTypeItemStaticSegmentValue } from "./SegmentTypeItemStaticSegmentValue.js";

export const SegmentTypeItemStaticSegment: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemStaticSegment.Raw,
    Mailchimp.SegmentTypeItemStaticSegment
> = core.serialization.object({
    field: SegmentTypeItemStaticSegmentField,
    op: SegmentTypeItemStaticSegmentOp,
    value: SegmentTypeItemStaticSegmentValue,
});

export declare namespace SegmentTypeItemStaticSegment {
    export interface Raw {
        field: SegmentTypeItemStaticSegmentField.Raw;
        op: SegmentTypeItemStaticSegmentOp.Raw;
        value: SegmentTypeItemStaticSegmentValue.Raw;
    }
}
