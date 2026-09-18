//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemInterestsOp } from "./SegmentTypeItemInterestsOp.js";

export const SegmentTypeItemInterests: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemInterests.Raw,
    Mailchimp.SegmentTypeItemInterests
> = core.serialization.object({
    field: core.serialization.string().optional(),
    op: SegmentTypeItemInterestsOp.optional(),
    value: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace SegmentTypeItemInterests {
    export interface Raw {
        field?: string | null;
        op?: SegmentTypeItemInterestsOp.Raw | null;
        value?: string[] | null;
    }
}
