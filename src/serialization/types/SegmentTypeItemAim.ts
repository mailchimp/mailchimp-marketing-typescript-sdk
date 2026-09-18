//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemAimField } from "./SegmentTypeItemAimField.js";
import { SegmentTypeItemAimOp } from "./SegmentTypeItemAimOp.js";

export const SegmentTypeItemAim: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemAim.Raw,
    Mailchimp.SegmentTypeItemAim
> = core.serialization.object({
    field: SegmentTypeItemAimField.optional(),
    op: SegmentTypeItemAimOp.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemAim {
    export interface Raw {
        field?: SegmentTypeItemAimField.Raw | null;
        op?: SegmentTypeItemAimOp.Raw | null;
        value?: string | null;
    }
}
