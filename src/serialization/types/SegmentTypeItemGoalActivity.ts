//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemGoalActivityField } from "./SegmentTypeItemGoalActivityField.js";
import { SegmentTypeItemGoalActivityOp } from "./SegmentTypeItemGoalActivityOp.js";

export const SegmentTypeItemGoalActivity: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemGoalActivity.Raw,
    Mailchimp.SegmentTypeItemGoalActivity
> = core.serialization.object({
    field: SegmentTypeItemGoalActivityField,
    op: SegmentTypeItemGoalActivityOp,
    value: core.serialization.string(),
});

export declare namespace SegmentTypeItemGoalActivity {
    export interface Raw {
        field: SegmentTypeItemGoalActivityField.Raw;
        op: SegmentTypeItemGoalActivityOp.Raw;
        value: string;
    }
}
