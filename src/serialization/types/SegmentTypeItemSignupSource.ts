//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemSignupSourceField } from "./SegmentTypeItemSignupSourceField.js";
import { SegmentTypeItemSignupSourceOp } from "./SegmentTypeItemSignupSourceOp.js";

export const SegmentTypeItemSignupSource: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemSignupSource.Raw,
    Mailchimp.SegmentTypeItemSignupSource
> = core.serialization.object({
    field: SegmentTypeItemSignupSourceField,
    op: SegmentTypeItemSignupSourceOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemSignupSource {
    export interface Raw {
        field: SegmentTypeItemSignupSourceField.Raw;
        op: SegmentTypeItemSignupSourceOp.Raw;
        value?: string | null;
    }
}
